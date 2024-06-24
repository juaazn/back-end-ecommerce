const { Producto } = require("../models/producto.js");

const ProductoController = {
  create(req, res) {
    req.body.role = "producto";
    
    Producto.create(req.body)
      .then((producto) => {
        producto.addPedido(req.body.PedidoId)
        res
          .status(201)
          .send({ message: "Producto creado con éxito", producto })
        })
      .catch((err) => console.error(err));
  },
};

module.exports = ProductoController;
