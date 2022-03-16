import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import Suporte from './Suporte'
import Cliente from './Cliente'
import { randomUUID } from 'crypto'

export default class Agenda extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column({ isPrimary: true })
  public idSuporte: number

  @belongsTo(() => Suporte, { foreignKey: 'id_suporte' })
  public suporte: BelongsTo<typeof Suporte>

  @column({ isPrimary: true })
  public idCliente: number

  @belongsTo(() => Cliente, { foreignKey: 'id_cliente' })
  public cliente: BelongsTo<typeof Cliente>

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

  public static selfAssignPrimaryKey = true

  @beforeCreate()
  public static async generateUUID(agenda: Agenda) {
    agenda.id = randomUUID()
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
