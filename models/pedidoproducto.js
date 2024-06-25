'use strict';
module.exports = (sequelize, DataTypes) => {
  const PedidoProducto = sequelize.define('PedidoProducto', {
    PedidoId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Pedidos', // Nombre de la tabla de pedidos
        key: 'id',
      },
      primaryKey: true
    },
    ProductoId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Productos', // Nombre de la tabla de productos
        key: 'id',
      },
      primaryKey: true
    }
  }) 
  return PedidoProducto;
};