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
          foreignKey: "ProductoId"
        });
    }
  }
  Producto.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      CategoriaId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Categoria',
          key: 'id',
        }
      }
    },
    {
      sequelize,
      modelName: "Producto",
    }
  );
  return Producto;
};
