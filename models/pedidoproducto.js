'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PedidoProducto extends Model {}

  PedidoProducto.init(
    {
      PedidoId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Pedidos',
          key: 'id',
        },
      },
      ProductoId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Productos',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'PedidoProducto',
      tableName: 'PedidoProductos'
    }
  );

  return PedidoProducto;
};
