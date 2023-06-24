const pool = require('../config/database')

async function ListarRecetas(req, res) {
    try {
        const consulta = await pool.query('SELECT * FROM recetas');
        res.status(200).json({ status: 200, data: consulta, menssage: 'Se ha listado con éxito todos las recetas del SPA' })
    } catch (error) {
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function AgregarReceta(req, res) {
    try {
        const { body } = req

        if (!body.nombre || !body.ingredientes || !body.pasos) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: nombre, ingredientes y pasos' })
        }

        await pool.query('INSERT INTO recetas SET ?', [body]);
        res.status(200).json({ status: 200, menssage: 'Se ha agregado con éxito la receta' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function EditarReceta(req, res) {
    try {
        const { id } = req.params
        const { body } = req

        if (!body.nombre || !body.ingredientes || !body.pasos) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: nombre, ingredientes y pasos' })
        }

        const consulta = pool.query('SELECT * FROM recetas WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe la receta que deseas editar' })
        }

        await pool.query('UPDATE recetas SET ? WHERE id = ?', [body, id]);
        res.status(200).json({ status: 200, menssage: 'Se ha editado con éxito la receta' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function EliminarReceta(req, res) {
    try {
        const { id } = req.params

        const consulta = await pool.query('SELECT * FROM recetas WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe la receta que deseas eliminar' })
        }

        await pool.query('DELETE FROM recetas WHERE id = ?', [id]);
        res.status(200).json({ status: 200, menssage: 'Se ha eliminado con éxito la receta' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

module.exports = {
    ListarRecetas,
    AgregarReceta,
    EditarReceta,
    EliminarReceta
}