const express = require("express");
const router = express.Router();
const ProductoController = require("../controllers/ProductoController");

router.post("/", ProductoController.create);
router.get('/', ProductoController.getAll);
router.get('/id/:id', ProductoController.getById)

module.exports = router;
