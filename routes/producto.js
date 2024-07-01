const express = require("express");
const router = express.Router();
const ProductoController = require("../controllers/ProductoController");
const { authentication } = require("../middlewares/authentication");

router.post("/", authentication, ProductoController.create);
router.get("/", ProductoController.getAll);
router.get("/id/:id", ProductoController.getById);
router.get("/name/:name", ProductoController.getOneByName);
router.delete("/id/:id", authentication, ProductoController.delete);
router.put("/id/:id", authentication, ProductoController.update);
router.get("/price/:price", ProductoController.getOneByName);
router.get("/sorted-by-price", ProductoController.getAllSortedByPrice);

module.exports = router;
