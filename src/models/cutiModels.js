const pool = require('../config/db')


const postCutiModels = (data) => {
    const {user_id, kategori, alasan, keterangan, photo, dari, sampai, status} = data
    const date = new Date().toISOString()

    return (
        pool.query(`INSERT INTO cuti(user_id, kategori, alasan, keterangan, photo, dari, sampai, status, created_at) VALUES(${user_id}, '${kategori}','${alasan}', '${keterangan}', '${photo}', '${dari}', '${sampai}', '${status}', '${date}')`)
    )
}

const getCutiModels = (id) => {
    return pool.query(`SELECT * FROM cuti WHERE cuti.user_id = ${id}`)
}


module.exports = {
    postCutiModels,
    getCutiModels
}