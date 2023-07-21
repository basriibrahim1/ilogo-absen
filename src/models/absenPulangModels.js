const pool = require('../config/db')

const postAbsenPulangModels = (data) => {
    const {user_id, photo, longitude, latitude} = data
    const date = new Date().toLocaleString()
    return (
        pool.query(`INSERT INTO absen_pulang(user_id, photo, longitude, latitude, created_at, clockout) VALUES(${user_id}, '${photo}','${longitude}', '${latitude}', '${date}', '${date}')`)
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