const express = require('express');
const { ListarReservas, AgregarReserva, EditarReserva, EliminarReserva } = require('../controller/reservas');
const router = express.Router();
const { Autenticacion } = require('../middleware/jwt');

// Listar reservas
router.get('/', ListarReservas)

// Agregar reservas
router.post('/add', AgregarReserva)

// Editar reservas
router.put('/edit/:id', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, EditarReserva)

// Eliminar reservas
router.delete('/delete/:id', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, EliminarReserva)

module.exports = router;