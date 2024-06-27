const express = require("express");
const router = express.Router();
const ProductoController = require("../controllers/ProductoController");

router.post("/", ProductoController.create);
router.get("/", ProductoController.getAll);
router.get("/id/:id", ProductoController.getById);
router.get("/name/:name", ProductoController.getOneByName);
router.delete("/id/:id", ProductoController.delete);
router.put("/id/:id", ProductoController.update);

module.exports = router;
