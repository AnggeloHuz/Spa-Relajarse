const express = require('express');
const { ListarUsuario, RegistrarUsuario, IniciarSesion } = require('../controller/usuarios');
const router = express.Router();

// Listar usuarios
router.get('/', ListarUsuario)

// Registar Usuario
router.post('/registrar', RegistrarUsuario)

// Iniciar Sesion
router.post('/login', IniciarSesion)

module.exports = router;