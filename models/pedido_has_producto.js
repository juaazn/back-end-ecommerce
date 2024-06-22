'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedido_has_producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pedido_has_producto.init({
    fk_producto: DataTypes.INTEGER,
    fk_pedido: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pedido_has_producto',
  });
  return pedido_has_producto;
};