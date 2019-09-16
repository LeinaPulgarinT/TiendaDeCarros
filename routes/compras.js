const { Router } = require("express");
const router = Router();
const Compra = require("../models/Compra");

router.post(`/`, async (req, res) => {
  let venta = Compra(req.body);
  try {
    await venta.save();
    res.json(venta);
  } catch (error) {
    console.error("error en Compra post", error);
  }
});
router.delete("/", async (req, res) => {
  let pedido = Compra(req.body);
  try {
    await Compra.remove();
    res.send("removed");
  } catch (error) {
    console.error("error en Compra delete", error);
  }
});

module.exports = router;
