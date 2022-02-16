import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

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
}
