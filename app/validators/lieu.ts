import vine from '@vinejs/vine'

import Lieu from '#models/lieu'
import Statut from '#models/statut'
import TypeLieu from '#models/type_lieu'
import NatureJuridique from '#models/nature_juridique'
import Superficie from '#models/superficie'
import Pays from '#models/pays'
import PublicCible from '#models/public_cible'
import { exists, unique } from '#validators/helpers/db'

vine.convertEmptyStringsToNull = true

export const createLieuValidator = vine.compile(
  vine.object({
    nom: vine
      .string()
      .trim()
      .minLength(2)
      .maxLength(100)
      .unique(unique(Lieu.table, 'nom', { caseInsensitive: true })),
    statutsUid: vine.string().exists(exists(Statut.table, 'uid')),
    typeLieu: vine.string().exists(exists(TypeLieu.table, 'uid')),
    naturesJuridiques: vine.string().exists(exists(NatureJuridique.table, 'uid')),
    siren: vine
      .string()
      .trim()
      .maxLength(255)
      .regex(/^[0-9]{9}$/)
      .optional(),
    naf: vine
      .string()
      .trim()
      .maxLength(255)
      .regex(/^[0-9]{4}[A-Z]$/)
      .optional(),
    adresse: vine.string().trim().maxLength(255),
    paysUid: vine.string().exists(exists(Pays.table, 'uid')),
    superficiesUid: vine.string().exists(exists(Superficie.table, 'uid')).optional(),
    latitude: vine.number().min(-90).max(90).optional().requiredIfExists('longitude'),
    longitude: vine.number().min(-180).max(180).optional().requiredIfExists('latitude'),
    timezonesUid: vine.string().trim().maxLength(255).optional(),
    description: vine.string().trim().optional(),
    publicCible: vine.array(vine.string().exists(exists(PublicCible.table, 'uid'))).optional(),
    telephone1: vine
      .string()
      .trim()
      .regex(/^(\+[0-9]{1,3}\d{5,15})$/)
      .optional(),
    telephone2: vine
      .string()
      .trim()
      .regex(/^(\+[0-9]{1,3}\d{5,15})$/)
      .optional(),
    courriel1: vine.string().trim().email().optional(),
    courriel2: vine.string().trim().email().optional(),
    web: vine
      .string()
      .url({
        require_protocol: true,
        protocols: ['https'],
      })
      .optional(),
    reseauxSociaux: vine.array(vine.string().activeUrl().optional()).optional(),
    openingHours: vine
      .string()
      .trim()
      .regex(
        /^(Lu|Ma|Me|Je|Ve|Sa|Di)(-\\1)?(\\d{2}:\\d{2}-\\d{2}:\\d{2})(;\\s?(Lu|Ma|Me|Je|Ve|Sa|Di)(-\\5)?\\d{2}:\\d{2}-\\d{2}:\\d{2})*$/
      )
      .optional(),
    openingHoursFetails: vine.string().trim().optional(),
    logo: vine.string().activeUrl().optional(),
    // logo: vine..file({
    //   size: '2mb',
    //   extnames: ['jpg', 'png', 'webp', 'svg'],
    // })
    photos: vine
      .array(
        vine.object({
          url: vine.string().activeUrl(),
          description: vine.string().optional().optional(),
        })
      )
      .optional(),
    videos: vine
      .array(
        vine.object({
          url: vine.string().activeUrl(),
          description: vine.string().optional().optional(),
        })
      )
      .optional(),
  })
)
