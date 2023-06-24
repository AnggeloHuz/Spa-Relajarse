const pool = require('../config/database')

async function ListarHorarios(req, res) {
    try {
        const consulta = await pool.query('SELECT * FROM horarios');
        res.status(200).json({ status: 200, data: consulta, menssage: 'Se ha listado con éxito todos los horarios del SPA' })
    } catch (error) {
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function EditarHorario(req, res) {
    try {
        const { id } = req.params
        const { body } = req

        if (!body.inicio_mañana || !body.fin_mañana || !body.inicio_tarde || !body.fin_tarde) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: inicio_mañana, fin_mañana, inicio_tarde y fin_tarde' })
        }

        const consulta = pool.query('SELECT * FROM horarios WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe el horario que deseas editar' })
        }

        await pool.query('UPDATE horarios SET ? WHERE id = ?', [body, id]);
        res.status(200).json({ status: 200, menssage: 'Se ha editado con éxito el horario' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

module.exports = {
    ListarHorarios,
    EditarHorario
}