const express = require('express');
const auth = require("../../middlewares/auth")
const validate = require('../../middlewares/validate');
const registerValidation = require('../../validations/register.validation');
const registerController = require("../../controllers/register.controller");

const router = express.Router();

router
  .post('/', validate(registerValidation.createRegister), registerController.createRegister)
  .get('/', auth('getRegisters'), validate(registerValidation.getRegisters), registerController.getRegisters);

  // .put("/:id", validate(cadastroValidation.update), cadastroController.update) //TESTADO
  // .post("/cpf", validate(cadastroValidation.show), cadastroController.show) //TESTADO
  // .delete("/:id", validate(cadastroValidation.remove), cadastroController.remove); //TESTADO

module.exports = router