const pool = require('../config/database')

async function ListarServicios(req, res) {
    try {
        const consulta = await pool.query('SELECT * FROM servicios');
        res.status(200).json({ status: 200, data: consulta, menssage: 'Se ha listado con éxito todos los servicios del SPA' })
    } catch (error) {
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function AgregarServicio(req, res) {
    try {
        const { body } = req

        if (!body.nombre || !body.categoria || !body.descripcion || !body.imagen || !body.precio) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: nombre, categoria, descripcion, imagen y precio' })
        }

        await pool.query('INSERT INTO servicios SET ?', [body]);
        res.status(200).json({ status: 200, menssage: 'Se ha agregado con éxito el servicio' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function EditarServicio(req, res) {
    try {
        const { id } = req.params
        const { body } = req

        if (!body.nombre || !body.categoria || !body.descripcion || !body.imagen || !body.precio) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: nombre, categoria, descripcion, imagen y precio' })
        }

        const consulta = pool.query('SELECT * FROM servicios WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe el servicio que deseas editar' })
        }

        await pool.query('UPDATE servicios SET ? WHERE id = ?', [body, id]);
        res.status(200).json({ status: 200, menssage: 'Se ha editado con éxito el servicio' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function EliminarServicio(req, res) {
    try {
        const { id } = req.params

        const consulta = await pool.query('SELECT * FROM servicios WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe el servicio que deseas eliminar' })
        }

        await pool.query('DELETE FROM servicio WHERE id = ?', [id]);
        res.status(200).json({ status: 200, menssage: 'Se ha eliminado con éxito el servicio' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

module.exports = {
    ListarServicios,
    AgregarServicio,
    EditarServicio,
    EliminarServicio
}