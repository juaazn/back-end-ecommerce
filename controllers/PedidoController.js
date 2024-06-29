const { Pedido, Producto, PedidoProducto, Usuario, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;

const PedidoController = {
    create(req, res, next) {
      req.body.role = "pedido";
      Pedido.create({
        fecha: req.body.fecha,
        userId: req.body.userId, // Añadir userId al pedido
      })
      .then((pedido) => {
        // Añadir el producto al pedido si se proporciona ProductoId
        if (req.body.ProductoId) {
          return Producto.findByPk(req.body.ProductoId)
            .then((producto) => {
              if (!producto) {
                return res.status(404).send({ message: 'Producto no encontrado' });
              }
              return pedido.addProducto(producto)
                .then(() => {
                  res.status(201).send({ message: 'Pedido creado con éxito', pedido });
                });
            });
        } else {
          res.status(201).send({ message: 'Pedido creado con éxito', pedido });
        }
      })
      .catch((err) => {
        console.error(err);
        next(err);
      });
},
  

    getAll(req, res) {
        Pedido.findAll({
            include: [
              {
                model: Producto,
                through: { attributes: [] }, // Excluir los atributos de la tabla intermedia
              },
            ],
          }).then((pedidos) => res.send(pedidos))
          .catch((err) => {
            console.log(err);
            res.status(500).send({
              message: "Ha habido un problema al cargar los pedidos",
            });
        });
    }
};

module.exports = PedidoController;