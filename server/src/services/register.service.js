const httpStatus = require('http-status');
const { Register } = require('../models');
const userService = require('./user.service');
const ApiError = require('../utils/ApiError');
const moment = require('moment');

//Create a register
const createRegister = async (registerBody) => {
  const register = await getRegisterByCpf(registerBody.cpf)
  const alreadyRegistered = register.find(item => item.curso === registerBody.curso)
  // const emailIsGmail = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/i.test(registerBody.email)

  // if(!emailIsGmail){
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Insira um e-mail do GMAIL válido!');
  // }

  if (alreadyRegistered) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Curso já está registrado!');
  }
  registerBody.registrationNumber = moment().format('YYYYMhmmss').toString();
  return Register.create(registerBody);
}

//Query for registers
const queryRegisters = async (filter, options) => {
  const registers = await Register.paginate(filter, options);
  return registers;
}

//Get Register by cpf
const getRegisterByCpf = async (cpf) => {
  return Register.find({ cpf: cpf });
};

module.exports = {
  createRegister,
  queryRegisters
};