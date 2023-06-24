const pool = require('../config/database')

async function ListarEstaciones(req, res) {
    try {
        const consulta = await pool.query('SELECT * FROM estaciones');
        res.status(200).json({ status: 200, data: consulta, menssage: 'Se ha listado con éxito todas las estaciones del SPA' })
    } catch (error) {
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function AgregarEstacion(req, res) {
    try {
        const { body } = req

        if (!body.nombre || !body.descripcion) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: nombre y descripcion' })
        }

        await pool.query('INSERT INTO estaciones SET ?', [body]);
        res.status(200).json({ status: 200, menssage: 'Se ha agregado con éxito el estacion' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function EditarEstacion(req, res) {
    try {
        const { id } = req.params
        const { body } = req

        if (!body.nombre || !body.descripcion) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: nombre y descripcion' })
        }

        const consulta = pool.query('SELECT * FROM estaciones WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe la estacion que deseas editar' })
        }

        await pool.query('UPDATE estaciones SET ? WHERE id = ?', [body, id]);
        res.status(200).json({ status: 200, menssage: 'Se ha editado con éxito la estacion' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function EliminarEstacion(req, res) {
    try {
        const { id } = req.params

        const consulta = await pool.query('SELECT * FROM estaciones WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe la estacion que deseas eliminar' })
        }

        await pool.query('DELETE FROM estaciones WHERE id = ?', [id]);
        res.status(200).json({ status: 200, menssage: 'Se ha eliminado con éxito la estacion' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function ListarEstacionServicios(req, res) {
    try {
        const { id } = req.params

        const consulta = await pool.query('SELECT * FROM servicios WHERE estacion = ?', [id]);
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe servicios en esta Estación' })
        }

        res.status(200).json({ status: 200, data: consulta, menssage: 'Se ha listado con éxito todos los servicios de la Estación' })
    } catch (error) {
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

module.exports = {
    ListarEstaciones,
    AgregarEstacion,
    EditarEstacion,
    EliminarEstacion,
    ListarEstacionServicios
}