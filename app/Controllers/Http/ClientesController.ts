import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from '../../Models/Cliente'
export default class ClientesController {
  public async index({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const data = await request.only([
      'nome',
      'cpf',
      'endereco',
      'bairro',
      'numero',
      'cidade',
      'uf',
      'cep',
      'funcao',
      'nivel',
    ])
    const dataCliente = await Cliente.create(data)
    return dataCliente
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
