import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, beforeSave, belongsTo, column } from '@adonisjs/lucid/orm'

import Lieu from '#models/lieu'
import UidService from '#services/uid_service'

export default class ReseauSocial extends BaseModel {
  static table = 't_reseaux_sociaux'

  @column({ isPrimary: true })
  declare uid: string

  @column()
  declare lieuUid: string

  @column()
  declare url: string

  @belongsTo(() => Lieu, {
    foreignKey: 'lieuUid',
  })
  declare lieu: BelongsTo<typeof Lieu>

  @beforeSave()
  static async generateUid(reseauSocial: ReseauSocial) {
    if (!reseauSocial.uid) {
      reseauSocial.uid = UidService.createRandomString(9)
    }
  }
}
