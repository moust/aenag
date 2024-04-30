import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 't_lieux'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('uid', 9).primary().notNullable()
      table.string('statuts_uid', 9).references('t_statuts.uid').notNullable()
      table.string('natures_juridiques', 9).notNullable()
      table.string('siren', 9).nullable()
      table.string('naf', 5).nullable()
      table.string('nom', 100).notNullable().unique()
      table.text('description').nullable()
      table.string('adresse', 255).nullable()
      table.string('pays_uid', 9).references('t_pays.uid').notNullable()
      table.decimal('latitude', 10, 8).nullable()
      table.decimal('longitude', 11, 8).nullable()
      table.string('timezones_uid', 9).references('t_timezones.uid').nullable()
      table.string('superficies_uid', 9).references('t_superficies.uid').nullable()
      table.string('telephone1', 15).nullable()
      table.string('telephone2', 15).nullable()
      table.string('courriel1', 255).nullable()
      table.string('courriel2', 255).nullable()
      table.string('web', 255).nullable()
      table.string('opening_hours', 255).nullable()
      table.string('opening_hours_details', 255).nullable()
      table.string('logo', 255).nullable()
      table.datetime('dt_add').notNullable()
      table.timestamp('dt_edi').notNullable()

      this.raw('ALTER TABLE `t_lieux` ADD FULLTEXT KEY `description` (`description`)')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
