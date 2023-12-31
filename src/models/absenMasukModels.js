const pool = require('../config/db')

const postAbsenMasukModels = (data) => {
    const {user_id, photo, longitude, latitude, status} = data
    const date = new Date().toLocaleString()
    return (
        pool.query(`INSERT INTO absen_masuk(user_id, photo, longitude, latitude, created_at, clock_in) VALUES(${user_id}, '${photo}','${longitude}', '${latitude}', '${date}', '${date}')`)
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