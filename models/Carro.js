const { Schema, model } = require("mongoose");

const CarroSchema = new Schema({
  Carro: { type: String, required: true },
  color: { type: String, required: true },
  rines: { type: String, required: true },
  precioCarro: { type: Number, required: true },

  created_since: { type: Date, default: Date.now }
});
module.exports = model("Carro", CarroSchema);
