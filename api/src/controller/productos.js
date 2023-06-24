const pool = require('../config/database')

async function ListarProductos(req, res) {
    try {
        const consulta = await pool.query('SELECT * FROM productos');
        res.status(200).json({ status: 200, data: consulta, menssage: 'Se ha listado con éxito todos los productos de la tienda' })
    } catch (error) {
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}


async function BuscarProducto(req, res) {
    try {
        const { buscar } = req.params

        const consulta = await pool.query('SELECT * FROM productos where nombre = ?', [buscar]);
        res.status(200).json({ status: 200, data: consulta, menssage: 'Se ha encontrado los siguientes resultados' })
    } catch (error) {
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function BuscarProductoCategoria(req, res) {
    try {
        const { buscar } = req.params

        const consulta = await pool.query('SELECT * FROM productos where categoria = ?', [buscar]);
        res.status(200).json({ status: 200, data: consulta, menssage: 'Se ha encontrado los siguientes resultados' })
    } catch (error) {
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function AgregarProducto(req, res) {
    try {
        const { body } = req

        if (!body.nombre || !body.categoria || !body.descripcion || !body.imagen || !body.precio) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: nombre, categoria, descripcion, imagen y precio' })
        }

        await pool.query('INSERT INTO productos SET ?', [body]);
        res.status(200).json({ status: 200, menssage: 'Se ha agregado con éxito el producto' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function EditarProducto(req, res) {
    try {
        const { id } = req.params
        const { body } = req

        if (!body.nombre || !body.categoria || !body.descripcion || !body.imagen || !body.precio) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: nombre, categoria, descripcion, imagen y precio' })
        }

        const consulta = pool.query('SELECT * FROM productos WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe el producto que deseas editar' })
        }

        await pool.query('UPDATE productos SET ? WHERE id = ?', [body, id]);
        res.status(200).json({ status: 200, menssage: 'Se ha editado con éxito el producto' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

async function EliminarProductos(req, res) {
    try {
        const { id } = req.params

        const consulta = await pool.query('SELECT * FROM productos WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe el producto que deseas eliminar' })
        }

        await pool.query('DELETE FROM productos WHERE id = ?', [id]);
        res.status(200).json({ status: 200, menssage: 'Se ha eliminado con éxito el producto' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor' });
    }
}

module.exports = {
    ListarProductos,
    AgregarProducto,
    EditarProducto,
    EliminarProductos,
    BuscarProducto,
    BuscarProductoCategoria
}