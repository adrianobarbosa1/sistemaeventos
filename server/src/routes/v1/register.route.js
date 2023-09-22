const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { registerValidation } = require('../../validations');
const { registerController } = require('../../controllers');

const router = express.Router();

router
  .post('/', auth('servidorUser'), validate(registerValidation.createRegister), registerController.createRegister)
  .get('/', auth('getRegisters'), validate(registerValidation.getRegisters), registerController.getRegisters);

module.exports = router;
