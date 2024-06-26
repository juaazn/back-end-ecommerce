const express = require("express");
const router = express.Router();
const CategoriaController = require("../controllers/CategoriaController");

router.post("/", CategoriaController.create);
router.get('/', CategoriaController.getAll);

module.exports = router;