import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'

export default class ClienteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({ trim: true }, [rules.maxLength(150)]),
    razaoSocial: schema.string.optional({ trim: true }, [rules.maxLength(150)]),
    endereco: schema.string.optional({ trim: true }, [rules.maxLength(150)]),
    bairro: schema.string.optional({ trim: true }, [rules.maxLength(100)]),
    cidade: schema.string.optional({ trim: true }, [rules.maxLength(50)]),
    numero: schema.number.optional(),
    uf: schema.string.optional({ trim: true }, [rules.maxLength(2), rules.minLength(2)]),
    cep: schema.string.optional({ trim: true }, [rules.maxLength(9), rules.minLength(9)]),
    cpf_cnpj: schema.string({ trim: true }, [rules.maxLength(18), rules.minLength(14)]),
  })

  public messages = {
    required: 'O campo {{ field }} deve ser informado',
    minLength: 'O campo {{field}} deve ter no minimo {{options.minLength}}',
    maxLength: 'O campo {{field}} deve ter no maximo {{options.maxLength}}',
  }
}
