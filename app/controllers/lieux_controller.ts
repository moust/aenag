import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

import Lieu from '#models/lieu'
import NatureJuridique from '#models/nature_juridique'
import Pays from '#models/pays'
import PublicCible from '#models/public_cible'
import Statut from '#models/statut'
import Superficie from '#models/superficie'
import Timezone from '#models/timezone'
import TypeLieu from '#models/type_lieu'

import { createLieuValidator } from '#validators/lieu'
import UidService from '#services/uid_service'

export default class LieuxController {
  async create({ view }: HttpContext) {
    const naturesJuridiques = await NatureJuridique.all()
    const pays = await Pays.all()
    const publicCibles = await PublicCible.all()
    const statuts = await Statut.all()
    const superficies = await Superficie.all()
    const timezones = await Timezone.all()
    const typesLieux = await TypeLieu.all()

    return view.render('pages/home', {
      naturesJuridiques,
      pays,
      publicCibles,
      statuts,
      superficies,
      timezones,
      typesLieux,
    })
  }

  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    return Lieu.query()
      .preload('statut')
      .preload('natureJuridique')
      .preload('typeLieu')
      .preload('publicCible')
      .preload('pays')
      .preload('timezone')
      .preload('superficie')
      .preload('reseauxSociaux')
      .preload('photos')
      .preload('videos')
      .paginate(page)
    // return view.render('pages/lieux/index', { lieux })
  }

  async show({ params }: HttpContext) {
    return Lieu.findOrFail(params.uid)
    // return view.render('pages/lieux/show', { lieu })
  }

  async store({ request, response, session }: HttpContext) {
    console.log(request.all())
    // save entity
    const payload = await request.validateUsing(createLieuValidator)

    console.log(payload)

    const trx = await db.transaction()

    try {
      const lieu = await Lieu.create(payload, { client: trx })

      if (payload.typeLieu) {
        await lieu.related('typeLieu').attach(
          {
            [payload.typeLieu]: {
              uid: UidService.createRandomString(9),
            },
          },
          trx
        )
      }

      if (payload.publicCible) {
        await lieu.related('publicCible').attach(
          Object.fromEntries(
            payload.publicCible.map((uid) => [
              uid,
              {
                uid: UidService.createRandomString(9),
              },
            ])
          ),
          trx
        )
      }

      if (payload.reseauxSociaux) {
        await lieu.related('reseauxSociaux').createMany(
          payload.reseauxSociaux.map((url) => ({ url })),
          { client: trx }
        )
      }

      if (payload.photos) {
        await lieu.related('photos').createMany(payload.photos, { client: trx })
      }

      if (payload.videos) {
        await lieu.related('videos').createMany(payload.videos, { client: trx })
      }

      await trx.commit()

      session.flash('notification', {
        type: 'success',
        message: 'Merci pour votre participation !',
      })
    } catch (error) {
      await trx.rollback()
      console.error('LieuxController:store', error)
      session.flash('notification', {
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      })
    }

    response.redirect().back()
  }
}
