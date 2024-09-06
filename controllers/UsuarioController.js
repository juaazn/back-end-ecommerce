//const bcryptjs = require("bcryptjs");
const {
  Usuario,
  Token,
  Producto,
  Pedido,
  Sequelize,
} = require("../models/index.js");
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
        res.status(500).send({
          message: "Error en la creación del usuario",
          error: err.message,
        });
        next(err);
      });
  },
  login(req, res) {
    try {
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
    } catch (error) {
      console.log(err);
      res.status(500).send({
        message: "Error: Login",
        error: err.message,
      });
    }
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
  async getAll(req, res) {
    try {
      const userId = req.user.id; // Obtener el ID del usuario autenticado

      // Encontrar el usuario junto con sus pedidos y productos en esos pedidos
      const user = await Usuario.findByPk(userId, {
        include: {
          model: Pedido,
          include: {
            model: Producto,
          },
        },
      });

      if (!user) {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }

      res.status(200).send(user);
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
      res
        .status(500)
        .send({ message: "Error al obtener los datos del usuario" });
    }
  },
};

module.exports = UsuarioController;
