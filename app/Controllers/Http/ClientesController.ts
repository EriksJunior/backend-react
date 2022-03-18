import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from '../../Models/Cliente'

export default class ClientesController {
  public async index({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const data = await request.only([
      'nome',
      'razaoSocial',
      'endereco',
      'bairro',
      'cidade',
      'numero',
      'uf',
      'cep',
      'cpf_cnpj',
    ])

    return await Cliente.create(data)
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
