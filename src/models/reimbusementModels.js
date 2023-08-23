const pool = require('../config/db')


const postReimbusementModels = (data) => {
    const {user_id, kategori, perusahaan, event, tanggal, nilai, catatan} = data
    const date = new Date().toISOString()

    return (
        pool.query(`INSERT INTO reimbusement(user_id, kategori, perusahaan, event, tanggal, nilai, catatan, created_at) VALUES(${user_id}, '${kategori}','${perusahaan}', '${event}', '${tanggal}', '${nilai}', '${catatan}', '${date}')`)
    )
}

const getAllReimbusement = () => {
    return pool.query(`
    SELECT reimbusement.id AS id, reimbusement.created_at AS reimbusement_created, reimbusement.nilai, reimbusement.catatan, reimbusement.kategori, users.name AS username, users.id AS user_id, document.path_url, reimbusement.tanggal, reimbusement.event, reimbusement.perusahaan FROM reimbusement 
    JOIN users ON reimbusement.user_id = users.id
    JOIN document ON users.id = document.user_id
    WHERE document.source_type = 'App/Models/Reimbusement' AND   document.source_id = reimbusement.id`)
}

const getReimbusementModels = (id) => {
    return pool.query(`
    SELECT reimbusement.id AS id, reimbusement.created_at AS reimbusement_created, reimbusement.nilai, reimbusement.catatan, reimbusement.kategori, reimbusement.user_id, document.path_url, reimbusement.tanggal, reimbusement.event, reimbusement.perusahaan FROM reimbusement 
    JOIN users ON reimbusement.user_id = users.id
    JOIN document ON users.id = document.user_id
    WHERE document.source_type = 'App/Models/Reimbusement' AND document.source_id = reimbusement.id AND reimbusement.user_id = ${id}`)
}


module.exports = {
    postReimbusementModels,
    getReimbusementModels,
    getAllReimbusement
}