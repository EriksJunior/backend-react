import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class SuporteValidatorStore {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({ trim: true }, [rules.maxLength(100)]),
    cpf: schema.string({ trim: true }, [
      rules.unique({ table: 'suportes', column: 'cpf' }),
      rules.maxLength(14),
      rules.minLength(14),
    ]),
    endereco: schema.string.optional({ trim: true }, [rules.maxLength(100)]),
    bairro: schema.string.optional({ trim: true }, [rules.maxLength(70)]),
    numero: schema.number.optional(),
    cidade: schema.string.optional({ trim: true }, [rules.maxLength(50)]),
    uf: schema.string.optional({ trim: true }, [rules.maxLength(2), rules.minLength(2)]),
    cep: schema.string.optional({ trim: true }, [rules.maxLength(9), rules.minLength(9)]),
    funcao: schema.string.optional({ trim: true }, [rules.maxLength(50)]),
    nivel: schema.string.optional({ trim: true }, [rules.maxLength(100)]),
  })

  public messages = {
    'required': 'O Campo {{field}} deve ser preenchido',
    'cpf.unique': 'CPF já existente na base de dados',
    'maxLength': 'O Campo {{field}} pode ter no maximo {{options.maxLength }} caracteres',
    'minLength': 'O campo {{field}} deve ter no minimo {{options.minLength }} caracteres',
  }
}

class SuporteValidatorUpdate {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({ trim: true }, [rules.maxLength(100)]),
    cpf: schema.string({ trim: true }, [rules.maxLength(14), rules.minLength(14)]),
    endereco: schema.string.optional({ trim: true }, [rules.maxLength(100)]),
    bairro: schema.string.optional({ trim: true }, [rules.maxLength(70)]),
    numero: schema.number.optional(),
    cidade: schema.string.optional({ trim: true }, [rules.maxLength(50)]),
    uf: schema.string.optional({ trim: true }, [rules.maxLength(2), rules.minLength(2)]),
    cep: schema.string.optional({ trim: true }, [rules.maxLength(9), rules.minLength(9)]),
    funcao: schema.string.optional({ trim: true }, [rules.maxLength(50)]),
    nivel: schema.string.optional({ trim: true }, [rules.maxLength(100)]),
  })

  public messages = {
    required: 'O Campo {{field}} deve ser preenchido',
    maxLength: 'O Campo {{field}} pode ter no maximo {{options.maxLength }} caracteres',
    minLength: 'O campo {{field}} deve ter no minimo {{options.minLength }} caracteres',
  }
}

export { SuporteValidatorStore, SuporteValidatorUpdate }
