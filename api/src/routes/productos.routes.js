const express = require('express');
const router = express.Router();
const { ListarProductos, AgregarProducto, EditarProducto, EliminarProductos, BuscarProducto, BuscarProductoCategoria } = require('../controller/productos')

// Listar todos los Productos de la tienda
router.get('/', ListarProductos)

// Buscar producto de la tienda
router.get('/nombre/:buscar', BuscarProducto)

// Buscar por categorias de la tienda
router.get('/categoria/:buscar', BuscarProductoCategoria)

// Agregar Productos a la Tienda
router.post('/add', AgregarProducto)

// Editar Productos de la Tienda
router.put('/edit/:id', EditarProducto)

// Eliminar Producto de la Tienda
router.delete('/delete/:id', EliminarProductos)

module.exports = router;