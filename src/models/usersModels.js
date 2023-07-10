const pool = require('../config/db')


const getUserModels = () => {
    return pool.query('SELECT * FROM users')
}

const getUserIdModels = (id) => {
    return pool.query(`SELECT * FROM users WHERE users.id = ${id}`)
}

const getUserEmailModels = (email) => {
    return pool.query(`SELECT * FROM users WHERE users.email = '${email}'`)
}


module.exports = {
    getUserModels,
    getUserIdModels,
    getUserEmailModels
}