import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Suporte from '../../Models/Suporte'
import { SuporteValidatorStore, SuporteValidatorUpdate } from 'App/Validators/SuporteValidator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class SuportesController {
  public async index({ params }: HttpContextContract) {
    const page = params.page
    const data = await Suporte.query().paginate(page, 5)
    return data
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(SuporteValidatorStore)
    const dataCliente = await Suporte.create(data)
    return dataCliente
  }

  public async fetchCustomerToEdit({ params }: HttpContextContract) {
    const data = await Suporte.findOrFail(params.id)
    return data
  }

  public async update({ request, params }: HttpContextContract) {
    const data = await Suporte.findOrFail(params.id)
    const cliente = await request.validate(SuporteValidatorUpdate)
    data.merge(cliente)
    data.save()
    return data
  }

  public async destroy({ params }: HttpContextContract) {
    const data = await Suporte.findOrFail(params.id)
    data.delete()
  }

  public async fetchCustomerToTechnicalData({}: HttpContextContract) {
    const data = await Database.knexQuery()
      .select(['nivel', 'id'])
      .table('suportes')
      .count('nivel as total')
      .groupBy('nivel')

    return data
  }
}
