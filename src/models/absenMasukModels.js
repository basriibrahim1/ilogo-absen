const pool = require('../config/db')

const postAbsenMasukModels = (data) => {
    const {user_id, photo, longitude, latitude, status} = data
    const create = new Date().toISOString()
    return (
        pool.query(`INSERT INTO absen_masuk(user_id, photo, longitude, latitude, status, created_at) VALUES(${user_id}, '${photo}','${longitude}', '${latitude}', '${status}', '${create}')`)
    )
}

const getAbsenMasukIdModels = (id) => { 
    return (
        pool.query(`SELECT * FROM absen_masuk WHERE absen_masuk.user_id = ${id}`)
    )
}

module.exports = {
    postAbsenMasukModels,
    getAbsenMasukIdModels
}