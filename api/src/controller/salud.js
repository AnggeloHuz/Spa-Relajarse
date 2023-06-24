const pool = require('../config/database')

async function ListarSalud(req, res) {
    try {
        const consulta = await pool.query('SELECT * FROM salud');
        res.status(200).json({ status: 200, data: consulta, menssage: 'Se ha listado con éxito todos los artículos de salud del SPA' })
    } catch (error) {
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function AgregarSalud(req, res) {
    try {
        const { body } = req

        if (!body.titulo || !body.descripcion || !body.referencia || !body.imagen) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: titulo, referencia, descripcion e imagen' })
        }

        await pool.query('INSERT INTO salud SET ?', [body]);
        res.status(200).json({ status: 200, menssage: 'Se ha agregado con éxito el artículo de salud' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function EditarSalud(req, res) {
    try {
        const { id } = req.params
        const { body } = req

        if (!body.titulo || !body.descripcion || !body.referencia || !body.imagen) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: titulo, referencia, descripcion e imagen' })
        }

        const consulta = pool.query('SELECT * FROM salud WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe el artículo de salud que deseas editar' })
        }

        await pool.query('UPDATE salud SET ? WHERE id = ?', [body, id]);
        res.status(200).json({ status: 200, menssage: 'Se ha editado con éxito el artículo de salud' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function EliminarSalud(req, res) {
    try {
        const { id } = req.params

        const consulta = await pool.query('SELECT * FROM salud WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe el artículo de salud que deseas eliminar' })
        }

        await pool.query('DELETE FROM salud WHERE id = ?', [id]);
        res.status(200).json({ status: 200, menssage: 'Se ha eliminado con éxito el artículo de salud' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

module.exports = {
    ListarSalud,
    AgregarSalud,
    EditarSalud,
    EliminarSalud
}