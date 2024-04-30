import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class TypeLieu extends BaseModel {
  static table = 't_types_lieu'

  @column({ isPrimary: true })
  declare uid: string

  @column()
  declare nom: string
}
