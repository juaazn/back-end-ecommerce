const { where } = require("sequelize");
const { Categoria } = require("../models/index.js");

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
};

module.exports = CategoriaController;
