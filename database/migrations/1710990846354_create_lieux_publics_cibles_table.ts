import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'lk_publics_cibles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('uid', 9).notNullable().primary()
      table.string('lieux_uid', 9).notNullable().references('t_lieux.uid')
      table.string('publics_cibles_uid', 9).notNullable().references('t_publics_cibles.uid')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
