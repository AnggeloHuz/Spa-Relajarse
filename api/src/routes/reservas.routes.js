const express = require('express');
const { ListarReservas, AgregarReserva, EditarReserva, EliminarReserva } = require('../controller/reservas');
const router = express.Router();

// Listar reservas
router.get('/', ListarReservas)

// Agregar reservas
router.post('/add', AgregarReserva)

// Editar reservas
router.put('/edit/:id', EditarReserva)

// Eliminar reservas
router.delete('/delete/:id', EliminarReserva)

module.exports = router;