const bcrypt = require('bcrypt');
const saltRounds = 10;


async function crearHash(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, function(err, hash) {
            resolve(hash)
        });
    })
}

async function comprobarPassword(password, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, function(err, result) {
            resolve(result)
        });
    })
}

module.exports = {
    crearHash,
    comprobarPassword
}