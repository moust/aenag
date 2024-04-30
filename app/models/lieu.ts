import { DateTime } from 'luxon'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, beforeSave, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'

import UidService from '#services/uid_service'

import NatureJuridique from '#models/nature_juridique'
import Pays from '#models/pays'
import Photo from '#models/photo'
import PublicCible from '#models/public_cible'
import ReseauSocial from '#models/reseau_social'
import Statut from '#models/statut'
import Superficie from '#models/superficie'
import Timezone from '#models/timezone'
import TypesLieu from '#models/type_lieu'
import Video from '#models/video'

export default class Lieu extends BaseModel {
  static table = 't_lieux'

  @column({ isPrimary: true })
  declare uid: string

  @column()
  declare statutsUid: string

  @column()
  declare naturesJuridiques: string

  @column()
  declare siren: string | null

  @column()
  declare naf: string | null

  @column()
  declare nom: string

  @column()
  declare description: string | null

  @column()
  declare adresse: string

  @column()
  declare paysUid: string

  @column()
  declare latitude: number | null

  @column()
  declare longitude: number | null

  @column()
  declare timezonesUid: string | null

  @column()
  declare superficiesUid: string

  @column({ columnName: 'telephone1' })
  declare telephone1: string | null

  @column({ columnName: 'telephone2' })
  declare telephone2: string | null

  @column({ columnName: 'courriel1' })
  declare courriel1: string | null

  @column({ columnName: 'courriel2' })
  declare courriel2: string | null

  @column()
  declare web: string | null

  @column()
  declare openingHours: string | null

  @column()
  declare openingHoursDetails: string | null

  @column()
  declare logo: string | null

  @column.dateTime({ autoCreate: true })
  declare dtAdd: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare dtEdi: DateTime

  @belongsTo(() => Statut, {
    foreignKey: 'statutsUid',
  })
  declare statut: BelongsTo<typeof Statut>

  @belongsTo(() => NatureJuridique, {
    foreignKey: 'naturesJuridiques',
  })
  declare natureJuridique: BelongsTo<typeof NatureJuridique>

  @manyToMany(() => TypesLieu, {
    pivotTable: 'lk_types_lieu',
    localKey: 'uid',
    pivotForeignKey: 'lieux_uid',
    relatedKey: 'uid',
    pivotRelatedForeignKey: 'types_uid',
  })
  declare typeLieu: ManyToMany<typeof TypesLieu>

  @manyToMany(() => PublicCible, {
    pivotTable: 'lk_publics_cibles',
    localKey: 'uid',
    pivotForeignKey: 'lieux_uid',
    relatedKey: 'uid',
    pivotRelatedForeignKey: 'publics_cibles_uid',
  })
  declare publicCible: ManyToMany<typeof PublicCible>

  @belongsTo(() => Pays, {
    foreignKey: 'paysUid',
  })
  declare pays: BelongsTo<typeof Pays>

  @belongsTo(() => Timezone, {
    foreignKey: 'timezonesUid',
  })
  declare timezone: BelongsTo<typeof Timezone>

  @belongsTo(() => Superficie, {
    foreignKey: 'superficiesUid',
  })
  declare superficie: BelongsTo<typeof Superficie>

  @hasMany(() => ReseauSocial, {
    foreignKey: 'lieuUid',
  })
  declare reseauxSociaux: HasMany<typeof ReseauSocial>

  @hasMany(() => Photo, {
    foreignKey: 'lieuUid',
  })
  declare photos: HasMany<typeof Photo>

  @hasMany(() => Video, {
    foreignKey: 'lieuUid',
  })
  declare videos: HasMany<typeof Video>

  @beforeSave()
  static async generateUid(lieu: Lieu) {
    if (!lieu.uid) {
      lieu.uid = UidService.createRandomString(9)
    }
  }
}
