const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { registerService } = require('../services');

const createRegister = catchAsync(async (req, res) => {
  const { user } = req;
  const register = await registerService.createRegister(req.body, user);
  res.status(httpStatus.CREATED).send(register);
});

const getRegisters = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await registerService.queryRegisters(filter, options);
  res.send(result);
});

module.exports = {
  createRegister,
  getRegisters,
};
