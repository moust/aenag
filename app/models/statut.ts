import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'

import Lieu from '#models/lieu'

export default class Statut extends BaseModel {
  static table = 't_statuts'

  @column({ isPrimary: true })
  declare uid: string

  @column()
  declare nom: string

  @hasMany(() => Lieu, {
    foreignKey: 'statutsUid',
  })
  declare lieux: HasMany<typeof Lieu>
}
