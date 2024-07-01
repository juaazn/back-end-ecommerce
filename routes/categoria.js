const express = require("express");
const router = express.Router();
const CategoriaController = require("../controllers/CategoriaController");

router.post("/", CategoriaController.create);
router.get("/", CategoriaController.getAll);
router.put("/update/:id", CategoriaController.update);
router.delete("/delete/:id", CategoriaController.delete);
router.get("/cateAndproducts", CategoriaController.getCategorieAndProducts);
router.get("/getById/:id", CategoriaController.getById);
router.get("/getByName", CategoriaController.getByName);

module.exports = router;
