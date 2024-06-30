const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/UsuarioController");
const { authentication } = require("../middlewares/authentication");

router.post("/create", UsuarioController.create);
router.post("/login", UsuarioController.login);
router.delete("/logout", authentication, UsuarioController.logout);

module.exports = router;
