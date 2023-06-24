const pool = require('../config/database');
const { crearHash, comprobarPassword } = require('../middleware/bcryps')

async function ListarUsuario(req, res) {
    try {
        const consulta = await pool.query('SELECT * FROM usuarios');
        res.status(200).json({ status: 200, data: consulta, menssage: 'Se ha listado con éxito todos los usuarios Administradores del SPA' })
    } catch (error) {
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function RegistrarUsuario(req, res) {
    try {
        const { body } = req

        if (!body.usuario || !body.password || !body.rol) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: usuario, password, rol' })
        }

        const hash = await crearHash(body.password)
        body.password = hash

        await pool.query('INSERT INTO usuarios SET ?', [body]);

        res.status(200).json({ status: 200, menssage: 'Se ha registrado con éxtio al usuario' })
    } catch (error) {
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function IniciarSesion(req, res) {
    try {
        const { body } = req

        if (!body.usuario || !body.password) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: usuario, password' })
        }

        const consulta = await pool.query('SELECT password FROM usuarios WHERE usuario = ?', [body.usuario])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'El usuario no esta registrado' })
        }

        const comparacion = await comprobarPassword(body.password, consulta[0].password)
        if (comparacion) {
            return res.status(200).json({ status: 200, menssage: 'Has iniciado sesión' })
        }

        res.status(400).json({ status: 400, menssage: 'Clave erronea' })
    } catch (error) {
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

module.exports = {
    ListarUsuario,
    RegistrarUsuario,
    IniciarSesion
}