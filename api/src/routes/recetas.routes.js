const express = require('express');
const { ListarRecetas, AgregarReceta, EditarReceta, EliminarReceta } = require('../controller/recetas');
const router = express.Router();

// Listar recetas
router.get('/', ListarRecetas)

// Agregar recetas
router.post('/add', AgregarReceta)

// Editar recetas
router.put('/edit/:id', EditarReceta)

// Eliminar recetas
router.delete('/delete/:id', EliminarReceta)

module.exports = router;