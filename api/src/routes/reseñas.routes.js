const express = require('express');
const router = express.Router();
const { ListarReseñas, AgregarReseña, EliminarReseñas } = require('../controller/reseñas')

// Listar las reseñas
router.get('/', ListarReseñas)

// Agregar reseña
router.post('/add', AgregarReseña)

// Eliminar reseña
router.delete('/delete/:id', EliminarReseñas)

module.exports = router;