import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Agenda extends BaseSchema {
  protected tableName = 'agenda'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique()
      table
        .integer('id_suporte')
        .unsigned()
        .references('id')
        .inTable('suportes')
        .onUpdate('CASCADE')
        .notNullable()
      table
        .integer('id_cliente')
        .unsigned()
        .references('id')
        .inTable('clientes')
        .onUpdate('CASCADE')
        .notNullable()
      table.dateTime('data_inicio').notNullable()
      table.dateTime('data_fim')
      table.text('descricao', 'longtext')
      table.string('situacao_atendimento', 200).notNullable().defaultTo('andamento')
      table.string('tipo_atendimento', 200).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
