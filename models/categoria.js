"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categoria.hasMany(models.Producto);
    }
  }
  Categoria.init(
    {
      nombre_categoria: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "categoria",
    }
  );
  return Categoria;
};
