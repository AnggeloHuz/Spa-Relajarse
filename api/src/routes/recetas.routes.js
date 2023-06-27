const express = require('express');
const { ListarRecetas, AgregarReceta, EditarReceta, EliminarReceta } = require('../controller/recetas');
const router = express.Router();
const { Autenticacion } = require('../middleware/jwt');

// Listar recetas
router.get('/', ListarRecetas)

// Agregar recetas
router.post('/add', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, AgregarReceta)

// Editar recetas
router.put('/edit/:id', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, EditarReceta)

// Eliminar recetas
router.delete('/delete/:id', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, EliminarReceta)

module.exports = router;