const express = require("express");
const router = express.Router();
const PedidoController = require("../controllers/PedidoController");

router.post("/", PedidoController.create);
router.get("/", PedidoController.getAll);

module.exports = router;