import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class PublicCible extends BaseModel {
  static table = 't_publics_cibles'

  @column({ isPrimary: true })
  declare uid: string

  @column()
  declare nom: string
}
