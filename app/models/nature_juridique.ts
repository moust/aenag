import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'

import Lieu from '#models/lieu'

export default class NatureJuridique extends BaseModel {
  static table = 't_natures_juridiques'

  @column({ isPrimary: true })
  declare uid: string

  @column()
  declare description: string

  @hasMany(() => Lieu, {
    foreignKey: 'naturesJuridiques',
  })
  declare lieux: HasMany<typeof Lieu>
}
