"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedido.belongsToMany(models.producto, {
        through: models.pedidoproducto,
      });
    }
  }
  Pedido.init(
    {
      fecha: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "pedido",
    }
  );
  return Pedido;
};
