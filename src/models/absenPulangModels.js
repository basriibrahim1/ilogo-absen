const pool = require('../config/db')

const postAbsenPulangModels = (data) => {
    const {user_id, photo, longitude, latitude, status} = data
    const create = new Date().toISOString()
    return (
        pool.query(`INSERT INTO absen_pulang(user_id, photo, longitude, latitude, status, created_at) VALUES(${user_id}, '${photo}','${longitude}', '${latitude}', '${status}', '${create}')`)
    )
}

const getAbsenPulangIdModels = (id) => { 
    return (
        pool.query(`SELECT * FROM absen_pulang WHERE absen_pulang.user_id = ${id}`)
    )
}

module.exports = {
    postAbsenPulangModels,
    getAbsenPulangIdModels
}