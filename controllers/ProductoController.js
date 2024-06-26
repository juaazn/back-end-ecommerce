const { Producto, Categoria, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;

const ProductoController = {
  //PARA CREAR PRODUCTO
  create(req, res) {
    req.body.role = "producto";
    Producto.create(req.body)
      .then((producto) => {
        producto.addPedido(req.body.PedidoId);
        res
          .status(201)
          .send({ message: "Producto creado con éxito", producto });
      })
      .catch((err) => console.error(err));
  },

  //PARA ACTUALIZAR UN PRODUCTO

  async update(req, res) {
    await Producto.update(
      { name: req.body.name, 
        price: req.body.price, 

      },
      { where: { id: req.params.id } }
    )
    res.send('Producto actualizado con éxito')
  },

  //PARA ELIMINAR UN PRODUCTO

  async delete(req, res) {
    await Producto.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.send('El producto ha sido eliminado con éxito')
  },


  //PARA TRAER CATEGORÍAS
  getAll(req, res) {
    Producto.findAll({ include: [Categoria] })
      .then((productos) => res.send(productos))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar los productos",
        });
      });
  },

  //PARA TRAER PRODUCTO POR ID
  getById(req, res) {
    Producto.findByPk(req.params.id, {
      include: [{ model: Producto, attributes: ["name"] }],
    }).then((producto) => res.send(producto));
  },

  //FILTRO PARA BUSCAR PRODUCTO POR NOMBRE O TÍTULO
  getOneByName(req, res) {
    Producto.findOne({
      where: {
        title: {
          [Op.like]: `%${req.params.title}%`,
        },
      },
      include: [Categoria],
    }).then((producto) => res.send(producto));
  },

  //FILTRO BUSCAR PRODUCTO POR PRECIO

  //FILTRO PARA ORDENAR PRODUCTOS DE MAYOR A MENOR PRECIO

  //VALIDACIÓN RELLENAR TODOS LOS CAMPOS CON MENSAJE

  //AÑADIR AUTENTICACIÓN PARA CREAR, ACTUALIZAR Y ELIMINAR

};

module.exports = ProductoController;
