import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from '../../Models/Cliente'
export default class ClientesController {
  public async index({ params }: HttpContextContract) {
    const page = params.page
    const data = await Cliente.query().paginate(page, 5)
    console.log(data)
    return data
  }

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

  public async fetchCustomerToEdit({ params }: HttpContextContract) {
    const data = await Cliente.findOrFail(params.id)
    console.log(data)
    return data
  }

  public async update({ request, params }: HttpContextContract) {
    const data = await Cliente.findOrFail(params.id)
    const cliente = await request.only([
      'id',
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
    data.merge(cliente)
    data.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const data = await Cliente.findOrFail(params.id)
    await data.delete()
  }
}
