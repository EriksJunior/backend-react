import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Suporte from './Suporte'

export default class Agenda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ isPrimary: true })
  public idSuporte: number

  @belongsTo(() => Suporte, { foreignKey: 'id_suporte' })
  public suporte: BelongsTo<typeof Suporte>

  @column({ isPrimary: true })
  public idCliente: number

  @column()
  public dataInicio: DateTime

  @column()
  public dataFim: DateTime

  @column()
  public descricao: string

  @column()
  public situacaoAtendimento: string

  @column()
  public tipoAtendimento: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
