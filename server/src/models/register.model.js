const mongoose = require("mongoose");
const validator = require("validator");
const { toJSON, paginate } = require("./plugins");

const registerSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    nome: {
      type: String,
      required: true,
      trim: true,
    },
    secretaria: {
      type: String,
      required: true,
      trim: true,
    },
    unidExercicio: {
      type: String,
      required: true,
      trim: true,
    },
    whatsapp: {
      type: String,
      required: true,
    },
    funcao: {
      type: String,
      required: true,
    },
    dtNascimento: {
      type: Date,
      required: true,
    },
    rg: {
      type: String,
      required: true,
    },
    ufRg: {
      type: String,
      required: true,
    },
    matricula: {
      type: String,
      unique: true,
      required: true,
    },
    deletado: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
registerSchema.plugin(toJSON);
registerSchema.plugin(paginate);

const Register = mongoose.model("Register", registerSchema);

module.exports = Register;
