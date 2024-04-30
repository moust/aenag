import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 't_videos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('uid', 9).notNullable().primary()
      table.string('lieu_uid', 9).nullable().references('t_lieux.uid')
      table.string('url', 255).nullable()
      table.text('description').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
