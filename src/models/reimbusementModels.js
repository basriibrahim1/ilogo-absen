const pool = require('../config/db')


const postReimbusementModels = (data) => {
    const {user_id, kategori, perusahaan, event, tanggal, nilai, catatan, photo} = data
    const date = new Date().toISOString()

    return (
        pool.query(`INSERT INTO reimbusement(user_id, kategori, perusahaan, event, tanggal, nilai, catatan, photo, created_at) VALUES(${user_id}, '${kategori}','${perusahaan}', '${event}', '${tanggal}', '${nilai}', '${catatan}', '${photo}', '${date}')`)
    )
}

const getReimbusementModels = (id) => {
    return pool.query(`SELECT * FROM reimbusement WHERE reimbusement.user_id = ${id}`)
}


module.exports = {
    postReimbusementModels,
    getReimbusementModels
}