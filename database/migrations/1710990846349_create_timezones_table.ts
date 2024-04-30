import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 't_timezones'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('uid', 9).notNullable().primary()
      table.string('nom', 255).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
