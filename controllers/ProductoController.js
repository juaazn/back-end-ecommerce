const {
  Producto,
  Categoria,
  Usuario,
  Sequelize,
} = require("../models/index.js");
const { Op } = Sequelize;

const ProductoController = {
  //PARA CREAR PRODUCTO
  create(req, res, next) {
    req.body.role = "producto";
    Producto.create({ ...req.body }) // No necesito recuperar el id de usuario - UserId: req.usuario.id
      .then((producto) => {
        //producto.addPedido(req.body.PedidoId);
        res
          .status(201)
          .send({ message: "Producto creado con éxito", producto });
      })
      .catch((err) => {
        console.error(err);
        next(err);
      });
  },

  //PARA ACTUALIZAR UN PRODUCTO

  async update(req, res) {
    await Producto.update(
      { name: req.body.name, price: req.body.price },
      { where: { id: req.params.id } }
    );
    res.send("Producto actualizado con éxito");
  },

  //PARA ELIMINAR UN PRODUCTO

  async delete(req, res) {
    await Producto.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("El producto ha sido eliminado con éxito");
  },

  //PARA TRAER LISTA PRODUCTOS CON CATEGORÍAS
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
    Producto.findByPk(req.params.id).then((producto) => res.send(producto));
  },

  //FILTRO PARA BUSCAR PRODUCTO POR NOMBRE O TÍTULO
  getOneByName(req, res) {
    Producto.findOne({
      where: {
        name: {
          [Op.like]: `%${req.params.name}%`,
        },
      },
      include: [Categoria],
    }).then((producto) => res.send(producto));
  },

  //FILTRO BUSCAR PRODUCTO POR PRECIO
  getOneByName(req, res) {
    Producto.findOne({
      where: {
        price: {
          [Op.like]: `%${req.params.price}%`,
        },
      },
      include: [Categoria],
    }).then((producto) => res.send(producto));
  },

  //FILTRO PARA ORDENAR PRODUCTOS DE MAYOR A MENOR PRECIO

  getAllSortedByPrice(req, res) {
    Producto.findAll({ order: [["price", "DESC"]] })
      .then((productos) => {
        if (productos.length === 0) {
          return res
            .status(404)
            .send({ message: "No se encontraron productos" });
        }
        res.send(productos);
      })
      .catch((err) => {
        console.error(err);
        res
          .status(500)
          .send({ message: "Error al obtener los productos", error: err });
      });
  },

  //VALIDACIÓN RELLENAR TODOS LOS CAMPOS CON MENSAJE HECHO EN PRODUCTO.JS Y ERRORS.JS

  //AÑADIR AUTENTICACIÓN PARA CREAR, ACTUALIZAR Y ELIMINAR
};

module.exports = ProductoController;
