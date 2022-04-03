import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Agenda from '../../Models/Agenda'
export default class AgendaController {
  public async index({ }: HttpContextContract) { }

  public async store({ request }: HttpContextContract) {
    const entityAgenda = await request.only(['id_suporte', 'id_cliente', 'data_agendamento', 'data_inicio', 'data_fim', 'descricao', 'situacao_atendimento', 'tipo_atendimento'])
    const data = await Agenda.create(entityAgenda)
    return data
  }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
