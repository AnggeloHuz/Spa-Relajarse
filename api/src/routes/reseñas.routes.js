const express = require('express');
const router = express.Router();
const { ListarReseñas, AgregarReseña, EliminarReseñas } = require('../controller/reseñas')
const { Autenticacion } = require('../middleware/jwt');

// Listar las reseñas
router.get('/', ListarReseñas)

// Agregar reseña
router.post('/add', AgregarReseña)

// Eliminar reseña
router.delete('/delete/:id', function (req, res, next) {
    roles = ["admin", "root"];
    Autenticacion(req, res, next, roles);
}, EliminarReseñas)

module.exports = router;