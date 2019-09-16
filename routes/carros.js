const { Router } = require("express");
const router = Router();
const Carro = require("../models/Carro");

router
  .route("/")
  .get(async (req, res) => {
    try {
      let pasajero = await Carro.find().sort("-_id");
      res.json(pasajero);
    } catch (error) {
      console.error("error en Carro get", error);
    }
  })
  .post(async (req, res) => {
    let vehiculo = Carro(req.body);
    try {
      await vehiculo.save();
      res.json(vehiculo);
    } catch (error) {
      console.error("error en Carro post", error);
    }
  })
  .put(async (req, res) => {
    let rines = Carro(req.body);
    try {
      await rines.save();
      res.json(rines);
    } catch (error) {
      console.error("error en Carro put", error);
    }
  });

module.exports = router;
