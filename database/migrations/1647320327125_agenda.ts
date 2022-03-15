import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Agenda extends BaseSchema {
  protected tableName = 'agenda'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .increments('id_cliente')
        .unsigned()
        .references('id')
        .inTable('suportes')
        .onUpdate('CASCADE')
        .notNullable()
      table.dateTime('data_inicio').notNullable()
      table.dateTime('data_fim')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
