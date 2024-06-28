const { Categoria, Producto } = require("../models/index.js");

const CategoriaController = {
  create(req, res) {
    req.body.role = "categoria";
    const { nombre_categoria } = req.body;

    Producto.create(nombre_categoria)
      .then((categoria) => {
        res
          .status(201)
          .send({ message: "Categoria creada con éxito", categoria });
      })
      .catch((err) => console.error(err));
  },

  getAll(req, res) {
    Categoria.findAll({ include: [Producto] })
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
