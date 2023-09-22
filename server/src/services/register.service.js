const httpStatus = require('http-status');
const { Register } = require('../models');
const ApiError = require('../utils/ApiError');

// Create a register
const createRegister = async (registerBody, user) => {
  const registerExiste = await Register.findOne({ matricula: registerBody.matricula });
  if (registerExiste) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Matricula já cadastrada');
  }

  const newRegister = new Register({
    userId: user._id,
    secretaria: registerBody.secretaria,
    unidExercicio: registerBody.unidExercicio,
    whatsapp: registerBody.whatsapp,
    dtNascimento: registerBody.dtNascimento,
    matricula: registerBody.matricula,
  });

  return Register.create(newRegister);
};

// Query for registers
const queryRegisters = async (filter, options) => {
  const registers = await Register.paginate(filter, options);
  return registers;
};

module.exports = {
  createRegister,
  queryRegisters,
};
