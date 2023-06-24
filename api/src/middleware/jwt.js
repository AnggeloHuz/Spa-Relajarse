const jwt = require('jsonwebtoken');

async function crearToken(usuario, rol) {
    return jwt.sign(
        {
            usuario: usuario,
            rol: rol
        },
        process.env.JWT_SECRET,
        /*{
            expiresIn: "2h"
        } */
    )
}

const verifyToken = async (token) => {
    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decode)
        return decode
    }catch(error){
        return null
    }
}

const Autenticacion = async (req, res, next, roles) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token)

        if (tokenData.usuario) {
            if (roles.includes(tokenData.rol)){
                next()
            }else{
                res.status(409).json({ status: 409, menssage: 'No tienes permisos con este rol' })
            }
        } else {
            res.status(409).json({ status: 409, menssage: 'Necesitas un token de sesion para acceder' })
        }
    }catch (error){
        console.log(error);
        res.status(409).json({ status: 409, menssage: 'Necesitas un token de sesion para acceder' })
    }
}

module.exports = {
    crearToken,
    Autenticacion
}