const express = require('express');
const { ListarServicios, AgregarServicio, EditarServicio, EliminarServicio } = require('../controller/servicios');
const router = express.Router();

// Listar Servicios
router.get('/', ListarServicios)

// Agregar Servicio
router.post('/add', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, AgregarServicio)

// Editar Servicio
router.put('/edit/:id', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, EditarServicio)

// Eliminar Servicio
router.delete('/delete/:id', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, EliminarServicio)

module.exports = router;