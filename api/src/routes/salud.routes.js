const express = require('express');
const { ListarSalud, AgregarSalud, EditarSalud, EliminarSalud } = require('../controller/salud');
const router = express.Router();

// Listar Articulos de salud
router.get('/', ListarSalud)

// Agregar Artículo de salud
router.post('/add', AgregarSalud)

// Editar Artículo de salud
router.put('/edit/:id', EditarSalud)

// Eliminar Artículo de salud
router.delete('/delete/:id', EliminarSalud)

module.exports = router;