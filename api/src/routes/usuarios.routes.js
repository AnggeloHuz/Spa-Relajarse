const express = require('express');
const { ListarUsuario, RegistrarUsuario, IniciarSesion } = require('../controller/usuarios');
const { Autenticacion } = require('../middleware/jwt');
const router = express.Router();

// Listar usuarios
router.get('/', function (req, res, next) {
    roles = ["root"];
    Autenticacion(req, res, next, roles);
}, ListarUsuario)

// Registar Usuario
router.post('/registrar', function (req, res, next) {
    roles = ["root"];
    Autenticacion(req, res, next, roles);
}, RegistrarUsuario)

// Iniciar Sesion
router.post('/login', IniciarSesion)

module.exports = router;