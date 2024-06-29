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
        otherKey: "ProductoId"
      }),
      Pedido.belongsTo(models.Usuario, {
        foreignKey: "id",
      });
    }
  }
  Pedido.init(
    {
      fecha: DataTypes.DATE,
      userId: {
        type: DataTypes.INTEGER,
        references: {
        model: "Usuarios",
        key: "id",
      },
      }
    },
    {
      sequelize,
      modelName: "Pedido",
      tableName: "Pedidos"
    }
  );
  return Pedido;
};
