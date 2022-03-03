import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from '../../Models/Cliente'
import { ClienteValidatorStore, ClienteValidatorUpdate } from 'App/Validators/ClienteValidator'

export default class ClientesController {
  public async index({ params }: HttpContextContract) {
    const page = params.page
    const data = await Cliente.query().paginate(page, 5)
    return data
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(ClienteValidatorStore)
    const dataCliente = await Cliente.create(data)
    return dataCliente
  }

  public async fetchCustomerToEdit({ params }: HttpContextContract) {
    const data = await Cliente.findOrFail(params.id)
    return data
  }

  public async update({ request, params }: HttpContextContract) {
    const data = await Cliente.findOrFail(params.id)
    const cliente = await request.validate(ClienteValidatorUpdate)
    data.merge(cliente)
    data.save()
    return data
  }

  public async destroy({ params }: HttpContextContract) {
    const data = await Cliente.findOrFail(params.id)
    data.delete()
  }
}
