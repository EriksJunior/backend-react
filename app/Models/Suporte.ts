import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { randomUUID } from 'crypto'

export default class Suporte extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public nome: string

  @column()
  public cpf: string

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
  public funcao: string

  @column()
  public nivel: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static selfAssignPrimaryKey = true

  @beforeCreate()
  public static async generateUUID(suporte: Suporte) {
    suporte.id = randomUUID()
  }
}
