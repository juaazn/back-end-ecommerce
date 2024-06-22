const { Producto } = require('../models/producto.js')
 const ProductoController = {
 create(req, res) {
   req.body.role = 'producto'
   Producto.create(req.body)
     .then((producto) =>
       res.status(201).send({ message: 'Producto creado con éxito', Producto })
     )
     .catch((err) => console.error(err))
 },
}

module.exports = ProductoController