const pool = require('../config/db')


const getUserModels = () => {
    return pool.query('SELECT * FROM users')
}

const getUserIdModels = (id) => {
    return pool.query(`SELECT * FROM users JOIN role ON users.role_id = role.id JOIN departement ON users.departement_id = departement.id WHERE users.id = ${id}`)
}

const getUserEmailModels = (email) => {
    return pool.query(`SELECT * FROM users JOIN role ON users.role_id = role.id WHERE users.email = '${email}'`)
}


module.exports = {
    getUserModels,
    getUserIdModels,
    getUserEmailModels
}