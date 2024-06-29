const { Usuario } = require("../models/index.js");
const bcrypt = require("bcryptjs");

const UsuarioController = {
  create(req, res) {
    const { name, email, password, role } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);

    Usuario.create({ name, email, password: passwordHash, role })
      .then((usuario) => {
        res.status(201).send({ message: "Usuario creada con éxito", usuario });
      })
      .catch((err) => console.log(err));
  },
};

module.exports = UsuarioController;
