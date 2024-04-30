import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Pays extends BaseModel {
  static table = 't_pays'

  @column({ isPrimary: true })
  declare uid: string

  @column()
  declare nom: string
}
