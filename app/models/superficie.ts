import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'

import Lieu from '#models/lieu'

export default class Superficie extends BaseModel {
  static table = 't_superficies'

  @column({ isPrimary: true })
  declare uid: string

  @column()
  declare nom: string

  @hasMany(() => Lieu)
  declare lieux: HasMany<typeof Lieu>
}
