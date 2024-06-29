const bcryptjs = require("bcryptjs");
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
  login(req, res) {
    Usuario.findOne({ where: { email: rl } }).then((usuario) => {
      if (!usuario) {
        return res
          .status(400)
          .send({ message: "Usuario o contraseña incorrecta" });
      }
      const isMatch = bcryptjs.compareSync(req.body.password, usuario.password);
      if (!isMatch) {
        return res
          .status(400)
          .send({ message: "Usuario o contraseña incorrecto" });
      }
      res.send("Incio de sesión", usuario);
    });
  },
};

module.exports = UsuarioController;
