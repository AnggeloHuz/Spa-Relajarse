const pool = require('../config/database')

async function ListarReseñas(req, res) {
    try {
        const consulta = await pool.query('SELECT * FROM reseñas');
        res.status(200).json({ status: 200, data: consulta, menssage: 'Se ha listado con éxito todos las reseñas de la SPA' })
    } catch (error) {
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function AgregarReseña(req, res) {
    try {
        const { body } = req

        if (!body.nombre || !body.comentario || !body.calificacion) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: nombre, comentario y calificacion' })
        }

        await pool.query('INSERT INTO reseñas SET ?', [body]);
        res.status(200).json({ status: 200, menssage: 'Se ha agregado con éxito la reseña' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function EliminarReseñas(req, res) {
    try {
        const { id } = req.params

        const consulta = await pool.query('SELECT * FROM reseñas WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe la reseña que deseas eliminar' })
        }

        await pool.query('DELETE FROM reseñas WHERE id = ?', [id]);
        res.status(200).json({ status: 200, menssage: 'Se ha eliminado con éxito la reseña' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

module.exports = {
    ListarReseñas,
    AgregarReseña,
    EliminarReseñas
}
