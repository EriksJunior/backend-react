import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Suportes extends BaseSchema {
  protected tableName = 'suportes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 36).primary()
      table.string('nome', 100)
      table.string('cpf', 40)
      table.string('endereco', 100)
      table.string('bairro', 70)
      table.integer('numero')
      table.string('cidade', 50)
      table.string('uf', 2)
      table.string('cep', 10)
      table.string('funcao', 50)
      table.string('nivel', 100)

      //teste commit
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
