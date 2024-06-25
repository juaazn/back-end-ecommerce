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
      Pedido.belongsToMany(models.Producto, {
        through: models.PedidoProducto,
        foreignKey: "PedidoId",
      });
      Pedido.belongsTo(models.Usuario);
    }
  }
  Pedido.init(
    {
      fecha: DataTypes.DATE,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Pedido",
    }
  );
  return Pedido;
};
