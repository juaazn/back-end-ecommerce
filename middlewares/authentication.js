const { Usuario, Token, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.js")["development"];

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send({ message: "No estás autorizado" });
    }

    const payload = jwt.verify(token, jwt_secret);
    const user = await Usuario.findByPk(payload.id);

    if (!user) {
      return res.status(401).send({ message: "No estás autorizado" });
    }

    const tokenFound = await Token.findOne({
      where: {
        [Op.and]: [{ UserId: user.id }, { token }],
      },
    });

    if (!tokenFound) {
      return res.status(401).send({ message: "No estás autorizado" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error en autenticación:", error);
    res.status(500).send({ message: "Ha habido un problema con el token" });
  }
};

module.exports = { authentication };
