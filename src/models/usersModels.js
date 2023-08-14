const pool = require('../config/db')


const getUserModels = () => {
    return pool.query('SELECT * FROM users')
}

const getUserIdModels = (id) => {

    return pool.query(`SELECT * FROM users WHERE users.id = ${id}`)
    // return pool.query(`SELECT users.id AS users_id, users.name AS username, users.email, users.photo, users.password, users.phone, users.birthday, users.gender, users.status, users.position, role.id AS role_id FROM users JOIN role ON users.role_id = role.id JOIN departement ON users.departement_id = departement.id WHERE users.id = ${id}`)
}

const getUserEmailModels = (email) => {
    return pool.query(`SELECT * FROM users JOIN role ON users.role_id = role.id WHERE users.email = '${email}'`)
}

const userUpdateModels = (data, id) => {
    const {name, password, phone, photo, birthday, gender, status, position} = data

    // const formattedBirthday = `${data.birthday.getMonth() + 1}-${data.birthday.getDate()}-${data.birthday.getFullYear()}`;

    return pool.query(`UPDATE users SET name='${name}', password ='${password}', photo='${photo}', phone='${phone}', birthday=TO_DATE('${birthday}', 'MM-DD-YYYY'), gender='${gender}', status='${status}', position='${position}' WHERE users.id=${id}; `)
}


module.exports = {
    getUserModels,
    getUserIdModels,
    getUserEmailModels,
    userUpdateModels
}