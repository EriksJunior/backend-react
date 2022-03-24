import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from '../../Models/Cliente'
import ClienteValidator from '../../Validators/ClienteValidator'

export default class ClientesController {
  public async index({ }: HttpContextContract) { }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(ClienteValidator)
    const dataCliente = await Cliente.create(data)
    console.log(dataCliente, 'quais salva essa merda')
    return dataCliente
  }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
