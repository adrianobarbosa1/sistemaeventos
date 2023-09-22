const Joi = require('joi');

const createRegister = {
  body: Joi.object().keys({
    secretaria: Joi.string().required(),
    unidExercicio: Joi.string().required(),
    whatsapp: Joi.string().required(),
    dtNascimento: Joi.date().required(),
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
