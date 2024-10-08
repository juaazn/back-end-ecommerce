"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producto.belongsTo(models.Categoria, {
        foreignKey: "id",
      }),
        Producto.belongsToMany(models.Pedido, {
          through: models.PedidoProducto,
          foreignKey: "ProductoId",
          otherKey: "PedidoId",
        });
      Producto.belongsToMany(models.Pedido, {
        through: models.PedidoProducto,
        foreignKey: "ProductoId",
      });
    }
  }
  Producto.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Por favor introduce el nombre del producto" },
        },
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Por favor introduce el precio" },
        },
      },

      CategoriaId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Categorias",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Producto",
      tableName: "Productos",
    }
  );
  return Producto;
};
