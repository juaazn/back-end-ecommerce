//const bcryptjs = require("bcryptjs");
const { Usuario, Token, Sequelize } = require("../models/index.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.js")["development"];
const { Op } = Sequelize;

const UsuarioController = {
  create(req, res, next) {
    const { name, email, password, role } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);

    Usuario.create({ name, email, password: passwordHash, role })
      .then((usuario) => {
        res.status(201).send({ message: "Usuario creada con éxito", usuario });
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  },
  login(req, res) {
    Usuario.findOne({ where: { email: req.body.email } }).then((usuario) => {
      if (!usuario) {
        return res
          .status(400)
          .send({ message: "Usuario o contraseña incorrecta" });
      }
      const isMatch = bcrypt.compareSync(req.body.password, usuario.password);
      if (!isMatch) {
        return res
          .status(400)
          .send({ message: "Usuario o contraseña incorrecto" });
      }

      const token = jwt.sign({ id: usuario.id }, jwt_secret, {
        expiresIn: "1h",
      });
      Token.create({ token, UserId: usuario.id });
      res.send({ message: "Bienvenid@ " + usuario.name, usuario, token });
    });
  },
  async logout(req, res) {
    try {
      const token = req.headers.authorization;
      await Token.destroy({
        where: {
          [Op.and]: [{ UserId: req.user.id }, { token }],
        },
      });
      res.send({ message: "Desconectado con éxito" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: "hubo un problema al tratar de desconectarte" });
    }
  },
};

module.exports = UsuarioController;
