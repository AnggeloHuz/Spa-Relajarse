const express = require('express');
const { ListarServicios, AgregarServicio, EditarServicio, EliminarServicio } = require('../controller/servicios');
const router = express.Router();

// Listar Servicios
router.get('/', ListarServicios)

// Agregar Servicio
router.post('/add', AgregarServicio)

// Editar Servicio
router.put('/edit/:id', EditarServicio)

// Eliminar Servicio
router.delete('/delete/:id', EliminarServicio)

module.exports = router;