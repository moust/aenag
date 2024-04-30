import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 't_pays'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('uid', 9).notNullable().primary()
      table.string('nom', 50).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
