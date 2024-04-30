import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 't_reseaux_sociaux'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('uid', 9).notNullable().primary()
      table.string('lieu_uid', 9).notNullable().references('t_lieux.uid')
      table.string('url', 255).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
