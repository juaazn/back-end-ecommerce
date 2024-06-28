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
    Categoria.findAll({ include: [Categoria] })
      .then((categorias) => res.send(categorias))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar las categorias",
        });
      });
  },
};

module.exports = CategoriaController;
