const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/UsuarioController");

router.post("/create", UsuarioController.create);

module.exports = router;
