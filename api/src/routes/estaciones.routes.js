const express = require('express');
const { ListarEstaciones, AgregarEstacion, EditarEstacion, EliminarEstacion, ListarEstacionServicios } = require('../controller/estaciones');
const router = express.Router();

// Listar estaciones
router.get('/', ListarEstaciones)

// Agregar estacion
router.post('/add', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, AgregarEstacion)

// Editar estacion
router.put('/edit/:id', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, EditarEstacion)

// Eliminar estacion
router.delete('/delete/:id', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, EliminarEstacion)

// Listar Servicios de la estacion
router.get('/servicios/:id', ListarEstacionServicios)

module.exports = router;