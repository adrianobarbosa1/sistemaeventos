const Joi = require('joi');

const createRegister = {
  body: Joi.object().keys({
    nome: Joi.string().required(),
    secretaria: Joi.string().optional(),
    unidExercicio: Joi.string().optional(),
    email: Joi.string().email().required(),
    cargo: Joi.string().optional(),
    telefone: Joi.string().optional(),
    cpf: Joi.string()
      .length(14)
      .optional()
      .error(() => {
        return { message: 'CPF Inválido.' };
      }),
    curso: Joi.string().required(),
    funcao: Joi.string().optional(),
    rua: Joi.string().required(),
    cep: Joi.string().required(),
    complemento: Joi.string().optional().allow(''),
    cidade: Joi.string().required(),
    uf: Joi.string().required(),
    bairro: Joi.string().required(),
    numero: Joi.string().optional().allow(''),
    dt_nascimento: Joi.date().required(),
    rg: Joi.string()
      .required()
      .error(() => {
        return { message: 'RG não pode ficar vazio' };
      }),
    uf_rg: Joi.string().required(),
    matricula: Joi.string().required(),
  }),
};

const getRegisters = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const update = {
  body: Joi.object().keys({
    nome: Joi.string().required(),
    cargo: Joi.string().required(),
    email: Joi.string().email().required(),
    telefone: Joi.string().allow(''),
    cpf: Joi.string().min(14).required(),
    dt_nascimento: Joi.date().required(),
    rg: Joi.string().optional().allow(''),
    uf_rg: Joi.string().optional().allow(''),
  }),
};

const remove = {
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = {
  createRegister,
  getRegisters,
  remove,
  update,
};
