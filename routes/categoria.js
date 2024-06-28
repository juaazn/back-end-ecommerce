const express = require("express");
const router = express.Router();
const CategoriaController = require("../controllers/CategoriaController");

router.post("/", CategoriaController.create);
router.get("/", CategoriaController.getAll);
router.put("/update/:id", CategoriaController.update);
router.delete("/delete/:id", CategoriaController.delete);

module.exports = router;
