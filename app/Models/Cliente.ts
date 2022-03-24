import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { randomUUID } from 'crypto'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public nome: string

  @column()
  public razaoSocial: string

  @column()
  public endereco: string

  @column()
  public bairro: string

  @column()
  public numero: number

  @column()
  public cidade: string

  @column()
  public uf: string

  @column()
  public cep: string

  @column()
  public cpf_cnpj: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static selfAssignPrimaryKey = true

  @beforeCreate()
  public static async generateUUID(cliente: Cliente) {
    cliente.id = randomUUID()
  }
}
