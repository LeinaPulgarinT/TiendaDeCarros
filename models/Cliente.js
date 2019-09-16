const { Schema, model } = require("mongoose");

const ClienteSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  telefono: { type: Number, required: true },
  cedula: { type: Number, required: true },

  created_since: { type: Date, default: Date.now }
});

let ClienteModel = model("Cliente", ClienteSchema);

module.exports = ClienteModel;
