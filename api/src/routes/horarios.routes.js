const express = require('express');
const router = express.Router();
const {  } = require('../controller/reseñas');
const { ListarHorarios, EditarHorario } = require('../controller/horarios');

// Listar los horarios
router.get('/', ListarHorarios)

// Editar los horarios
router.put('/edit/:id', EditarHorario)

module.exports = router;