import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'lk_types_lieu'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('uid', 9).notNullable().primary()
      table.string('lieux_uid', 9).notNullable().references('t_lieux.uid')
      table.string('types_uid', 9).notNullable().references('t_types_lieu.uid')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
