import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Agenda extends BaseSchema {
  protected tableName = 'agenda'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 36).primary()
      table
        .string('id_suporte')
        .references('id')
        .inTable('suportes')
        .onUpdate('CASCADE')
        .notNullable()
      table
        .string('id_cliente')
        .references('id')
        .inTable('clientes')
        .onUpdate('CASCADE')
        .notNullable()
      table.dateTime('data_agendamento')
      table.dateTime('data_inicio')
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
