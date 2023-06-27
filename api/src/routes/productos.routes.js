const express = require('express');
const router = express.Router();
const { Autenticacion } = require('../middleware/jwt');
const { ListarProductos, AgregarProducto, EditarProducto, EliminarProductos, BuscarProducto, BuscarProductoCategoria } = require('../controller/productos')

// Listar todos los Productos de la tienda
router.get('/', ListarProductos)

// Buscar producto de la tienda
router.get('/nombre/:buscar', BuscarProducto)

// Buscar por categorias de la tienda
router.get('/categoria/:buscar', BuscarProductoCategoria)

// Agregar Productos a la Tienda
router.post('/add', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, AgregarProducto)

// Editar Productos de la Tienda
router.put('/edit/:id', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, EditarProducto)

// Eliminar Producto de la Tienda
router.delete('/delete/:id', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, EliminarProductos)

module.exports = router;