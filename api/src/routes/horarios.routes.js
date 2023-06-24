const express = require('express');
const router = express.Router();
const {  } = require('../controller/reseñas');
const { ListarHorarios, EditarHorario } = require('../controller/horarios');

// Listar los horarios
router.get('/', ListarHorarios)

// Editar los horarios
router.put('/edit/:id', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, EditarHorario)

module.exports = router;