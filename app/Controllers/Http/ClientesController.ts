import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from '../../Models/Cliente'
import ClienteValidator from '../../Validators/ClienteValidator'

export default class ClientesController {
  public async index({ }: HttpContextContract) { }

  public async store({ request }: HttpContextContract) {
    const dataCliente = await request.validate(ClienteValidator)
    const data = await Cliente.create(dataCliente)
    return data
  }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ request, params }: HttpContextContract) {
    const data = await Cliente.findOrFail(params.id)
    const idCliente = await request.validate(ClienteValidator)

    data.merge(idCliente)
    data.save()

    return data

  }

  public async destroy({params}: HttpContextContract) {
    const data = await Cliente.findOrFail(params.id)
    data.delete()
   }
}
