const express = require('express');
const { ListarEstaciones, AgregarEstacion, EditarEstacion, EliminarEstacion, ListarEstacionServicios } = require('../controller/estaciones');
const router = express.Router();

// Listar estaciones
router.get('/', ListarEstaciones)

// Agregar estacion
router.post('/add', AgregarEstacion)

// Editar estacion
router.put('/edit/:id', EditarEstacion)

// Eliminar estacion
router.delete('/delete/:id', EliminarEstacion)

// Listar Servicios de la estacion
router.get('/servicios/:id', ListarEstacionServicios)

module.exports = router;