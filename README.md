
# CREACIÓN DE API CON BBDD SQL DE UN ECOMMERCE
## Descripción del Proyecto

Como parte del proyecto final del módulo Backend I del bootcamp Full Stack Web Develpment 2024, hemos desarrollado una API RESTful para gestionar un sistema de comercio electrónico, incluyendo registro y autenticación de usuarios, y CRUDs para productos, pedidos y categorías. Las relaciones entre las entidades han sido principalmente Many-to-Many y One-to-Many. 

Los apartados clave que os encontraréis en el proyecto se exponen a continuación:

## Funcionalidades

### Usuarios
- **Registro de Usuarios**: Bcrypt para contraseñas.
- **Login de Usuarios**: Autenticación y JWT.
- **Middleware de Autenticación**: Protección de rutas.

### CRUDs
- **Productos**: Crear, leer, actualizar y eliminar productos.
- **Pedidos**: Crear, leer, actualizar y eliminar pedidos.
- **Categorías**: Crear, leer, actualizar y eliminar categorías.
- **Usuarios**: Crear, leer, actualizar y eliminar usuarios.

### Relaciones
- **One-to-Many**: Una categoría tiene muchos productos.
- **Many-to-Many**: Un pedido incluye múltiples productos y viceversa.

### Seeders
- Creación inicial de datos en la base de datos.

## Endpoints Principales

### Usuarios
- `POST /register`: Registro de usuario.
- `POST /login`: Autenticación de usuario.

### Productos
- `POST /productos`: Crear producto.
- `GET /productos`: Obtener todos los productos.
- `GET /productos/:id`: Obtener producto por ID.
- `PUT /productos/:id`: Actualizar producto por ID.
- `DELETE /productos/:id`: Eliminar producto por ID.

### Pedidos
- `POST /pedidos`: Crear pedido.
- `GET /pedidos`: Obtener todos los pedidos.
- `GET /pedidos/:id`: Obtener pedido por ID.
- `PUT /pedidos/:id`: Actualizar pedido por ID.
- `DELETE /pedidos/:id`: Eliminar pedido por ID.

### Categorías
- `POST /categorias`: Crear categoría.
- `GET /categorias`: Obtener todas las categorías.
- `GET /categorias/:id`: Obtener categoría por ID.
- `PUT /categorias/:id`: Actualizar categoría por ID.
- `DELETE /categorias/:id`: Eliminar categoría por ID.



## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## Authors

- [@juaanzn](https://www.github.com/juaanzn)
- [@victudor09](https://www.github.com/victudor09)

