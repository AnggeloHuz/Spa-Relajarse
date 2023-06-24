const express = require('express');
const { ListarSalud, AgregarSalud, EditarSalud, EliminarSalud } = require('../controller/salud');
const router = express.Router();

// Listar Articulos de salud
router.get('/', ListarSalud)

// Agregar Artículo de salud
router.post('/add', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, AgregarSalud)

// Editar Artículo de salud
router.put('/edit/:id', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, EditarSalud)

// Eliminar Artículo de salud
router.delete('/delete/:id', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, EliminarSalud)

module.exports = router;