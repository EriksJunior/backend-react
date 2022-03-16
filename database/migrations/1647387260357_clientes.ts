import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clientes extends BaseSchema {
  protected tableName = 'clientes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 36).primary()
      table.string('nome', 150).notNullable()
      table.string('endereco', 150)
      table.string('bairro', 100)
      table.string('cidade', 50)
      table.integer('numero')
      table.string('uf', 2)
      table.string('cep', 9)
      table.string('cpf_cnpj', 18)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
