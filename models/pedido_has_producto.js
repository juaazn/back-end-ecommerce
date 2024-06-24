"use strict";

const { Model } = require("sequelize");
/* const pedido = require("./pedido")
const producto = require("./producto") */

module.exports = (sequelize, DataTypes) => {
  class pedido_has_producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pedido_has_producto.belongsTo(models.pedido);
      pedido_has_producto.belongsTo(models.producto)
    }
  }
  pedido_has_producto.init(
    {
      productoId: DataTypes.INTEGER,
      pedidoId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "pedido_has_producto",
    },
  );
  return pedido_has_producto;
};
