const { Router } = require("express");
const router = Router();
const Cliente = require("../models/Cliente");

router.get("/", async (req, res) => {
  try {
    let usuario = await Cliente.find().sort("-_id");
    res.json(usuario);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;

/*router.post("/", (req, res) => {
  let usuario = Cliente(req.body);
  usuario.save();
  res.json(usuario);

});*/
