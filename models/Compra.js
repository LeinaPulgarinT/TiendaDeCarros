const { Schema, model } = require("mongoose");

const CompraSchema = new Schema({
  precioRinesPersonalizacion: { type: String, required: true },
  tiempoDeEntrega: { type: String, required: true },
  precioTotal: { type: Number, required: true },
  Matricula_soat: { type: String, required: true },

  created_since: { type: Date, default: Date.now }
});
module.exports = model("Compra", CompraSchema);
