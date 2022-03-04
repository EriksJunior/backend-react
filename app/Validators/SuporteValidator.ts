import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class SuporteValidatorStore {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({ trim: true }, [rules.maxLength(100)]),
    cpf: schema.string({ trim: true }, [
      rules.unique({ table: 'suportes', column: 'cpf' }),
      rules.maxLength(14),
    ]),
    endereco: schema.string.optional({ trim: true }, [rules.maxLength(100)]),
    bairro: schema.string.optional({ trim: true }, [rules.maxLength(70)]),
    numero: schema.number.optional(),
    cidade: schema.string.optional({ trim: true }, [rules.maxLength(50)]),
    uf: schema.string.optional({ trim: true }, [rules.maxLength(2)]),
    cep: schema.string.optional({ trim: true }, [rules.maxLength(9)]),
    funcao: schema.string.optional({ trim: true }, [rules.maxLength(50)]),
    nivel: schema.string.optional({ trim: true }, [rules.maxLength(100)]),
  })

  public messages = {}
}

class SuporteValidatorUpdate {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({ trim: true }, [rules.maxLength(100)]),
    cpf: schema.string({ trim: true }, [rules.maxLength(14)]),
    endereco: schema.string.optional({ trim: true }, [rules.maxLength(100)]),
    bairro: schema.string.optional({ trim: true }, [rules.maxLength(70)]),
    numero: schema.number.optional(),
    cidade: schema.string.optional({ trim: true }, [rules.maxLength(50)]),
    uf: schema.string.optional({ trim: true }, [rules.maxLength(2)]),
    cep: schema.string.optional({ trim: true }, [rules.maxLength(9)]),
    funcao: schema.string.optional({ trim: true }, [rules.maxLength(50)]),
    nivel: schema.string.optional({ trim: true }, [rules.maxLength(100)]),
  })

  public messages = {}
}

export { SuporteValidatorStore, SuporteValidatorUpdate }
