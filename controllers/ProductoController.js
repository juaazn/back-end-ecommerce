const { Producto, Categoria } = require("../models/index.js");

const ProductoController = {
  create(req, res) {
    req.body.role = "producto";
  //PARA CREAR PRODUCTO
    Producto.create(req.body)
      .then((producto) => {
        producto.addPedido(req.body.PedidoId)
        res
          .status(201)
          .send({ message: "Producto creado con éxito", producto })
        })
      .catch((err) => console.error(err));
  },
  //PARA TRAER CATEGORÍAS
  getAll(req, res) {
    Producto.findAll({ include: [Categoria] })
      .then((productos) => res.send(productos))
      .catch((err) => {
        console.log(err)
        res.status(500).send({
            message: 'Ha habido un problema al cargar los productos',
          })
      })
  },
  //PARA TRAER PRODUCTO POR ID
  getById(req, res) {
    Producto.findByPk(req.params.id, {
      include: [{ model: Producto, attributes: 
 ['name'] }],
    }).then((producto) => res.send(producto))
  }
};

module.exports = ProductoController;
