const pool = require('../config/database')

async function ListarReservas(req, res) {
    try {
        const consulta = await pool.query('SELECT * FROM reservas');
        res.status(200).json({ status: 200, data: consulta, menssage: 'Se ha listado con éxito todos las reservas del SPA' })
    } catch (error) {
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function AgregarReserva(req, res) {
    try {
        const { body } = req

        if (!body.nombre || !body.apellido || !body.email || !body.telefono || !body.estacion || !body.servicio || !body.genero || !body.fecha) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: nombre, apellido, email, telefono, servicio, genero y fecha' })
        }

        await pool.query('INSERT INTO reservas SET ?', [body]);
        res.status(200).json({ status: 200, menssage: 'Se ha agregado con éxito la reserva' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function EditarReserva(req, res) {
    try {
        const { id } = req.params
        const { body } = req

        if (!body.nombre || !body.apellido || !body.email || !body.telefono || !body.estacion || !body.servicio || !body.genero || !body.fecha) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: nombre, apellido, email, telefono, estacion, servicio, genero y fecha' })
        }

        const consulta = pool.query('SELECT * FROM reservas WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe la reserva que deseas editar' })
        }

        await pool.query('UPDATE reservas SET ? WHERE id = ?', [body, id]);
        res.status(200).json({ status: 200, menssage: 'Se ha editado con éxito la reserva' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function EliminarReserva(req, res) {
    try {
        const { id } = req.params

        const consulta = await pool.query('SELECT * FROM reservas WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe la reserva que deseas eliminar' })
        }

        await pool.query('DELETE FROM reservas WHERE id = ?', [id]);
        res.status(200).json({ status: 200, menssage: 'Se ha eliminado con éxito la reserva' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

module.exports = {
    ListarReservas,
    AgregarReserva,
    EditarReserva,
    EliminarReserva
}