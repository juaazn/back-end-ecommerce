const { where, Model } = require("sequelize");
const { Categoria, Producto, Sequelize } = require("../models/index.js");

const CategoriaController = {
  create(req, res) {
    const { nameCategorie } = req.body;
    console.log(nameCategorie);
    Categoria.create({ nameCategorie })
      .then((categoria) => {
        res
          .status(201)
          .send({ message: "Categoria creada con éxito", categoria });
      })
      .catch((err) => console.error(err));
  },

  getAll(req, res) {
    Categoria.findAll()
      .then((categorias) => res.send(categorias))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar las categorias",
        });
      });
  },
  update(req, res) {
    const { id } = req.params;
    const { nameCategorie } = req.body;

    console.log(id, nameCategorie);

    Categoria.update({ nameCategorie: nameCategorie }, { where: { id: id } })
      .then(() => {
        return Categoria.findByPk(id);
      })
      .then((categoria) => {
        res.send(categoria);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al actualizar la categoría",
        });
      });
  },
  delete(req, res) {
    const { id } = req.params;

    Categoria.destroy({ where: { id: id } })
      .then((categoria) => {
        categoria ? res.sendStatus(204) : res.sendStatus(404);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al actualizar la categoría",
        });
      });
  },
  getCategorieAndProducts(req, res) {
    Categoria.findAll({ include: Producto })
      .then((categorias) => res.send(categorias))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al obtener categorías y productos",
        });
      });
  },
  getById(req, res) {
    Categoria.findByPk(req.params.id, {
      attributes: ["nameCategorie"],
    })
      .then((categoria) => res.send(categoria))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al obtener por id la categoría",
        });
      });
  },
  getByName(req, res) {
    const { nameCategorie } = req.body;
    Categoria.findOne({
      where: {
        nameCategorie: nameCategorie,
      },
    })
      .then((producto) => res.send(producto))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al obtener el nombre por categoría",
        });
      });
  },
};

module.exports = CategoriaController;
