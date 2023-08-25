const pool = require('../config/db')


const postCutiModels = (data) => {
    const {user_id, kategori_id, alasan, keterangan, photo, dari, sampai, masuk} = data
    const date = new Date().toISOString()

    return (
        pool.query(`INSERT INTO cuti(user_id, kategori_id, alasan, keterangan, photo, dari, sampai, created_at, masuk) VALUES(${user_id}, ${kategori_id},'${alasan}', '${keterangan}', '${photo}', '${dari}', '${sampai}', '${date}', '${masuk}')`)
    )
}

const getCutiIdModels = (id) => {
    return pool.query(`
        SELECT cuti.id AS cuti_id, users.id AS user_id, users.name AS username, role.role, kategori_cuti.nama AS kategori, cuti.alasan, cuti.keterangan, cuti.photo, cuti.dari, cuti.sampai, cuti.masuk, cuti.status, cuti.created_at, cuti.approval_hrd, cuti.approval_head FROM cuti
        JOIN users ON cuti.user_id = users.id 
        JOIN kategori_cuti ON cuti.kategori_id = kategori_cuti.id
        JOIN role ON users.role_id = role.id
        WHERE cuti.id = ${id}
    `)
}

const getCutiUserIdModels = (id) => {
    return pool.query(`
        SELECT cuti.id AS id, kategori_cuti.nama AS kategori, cuti.alasan, cuti.keterangan, cuti.photo, cuti.dari, cuti.sampai, cuti.masuk, cuti.status, cuti.created_at, cuti.approval_hrd, cuti.approval_head, cuti.is_approval FROM cuti

        JOIN kategori_cuti ON cuti.kategori_id = kategori_cuti.id
        WHERE cuti.user_id = ${id}
    `)
}

// JOIN users ON cuti.user_id = users.id 

const getAllCutiModels = () => {
    return pool.query(`
        SELECT cuti.id AS cuti_id, users.id AS users_id, users.name AS username, role.role, kategori_cuti.nama AS kategori, cuti.alasan, cuti.keterangan, cuti.photo, cuti.dari, cuti.sampai, cuti.masuk, cuti.status, cuti.created_at, cuti.approval_hrd, cuti.approval_head, cuti.is_approval, departement.nama AS departement, departement.user_manager_id AS departement_manager FROM cuti
        JOIN users ON cuti.user_id = users.id 
        JOIN kategori_cuti ON cuti.kategori_id = kategori_cuti.id
        JOIN role ON users.role_id = role.id
        JOIN departement ON users.departement_id = departement.id`)
}


const getCutiManagerModels = (id) => {
    return pool.query(`
        SELECT cuti.id AS cuti_id, users.id AS users_id, users.name AS username, role.role, kategori_cuti.nama AS kategori, cuti.alasan, cuti.keterangan, cuti.photo, cuti.dari, cuti.sampai, cuti.masuk, cuti.status, cuti.created_at, cuti.approval_hrd, cuti.approval_head, cuti.is_approval, departement.nama AS departement, departement.user_manager_id AS departement_manager FROM cuti
        JOIN users ON cuti.user_id = users.id 
        JOIN kategori_cuti ON cuti.kategori_id = kategori_cuti.id
        JOIN role ON users.role_id = role.id
        JOIN departement ON users.departement_id = departement.id
        WHERE departement.user_manager_id = ${id}
    `)
}

const updateCutiHrdModels = (data) => {
    const {hrd, id} = data

    return pool.query(`
        UPDATE cuti SET approval_hrd=${hrd} WHERE cuti.id = ${id}
    `)
}

const updateCutiManagerModels = (data) => {
    const {manager, id} = data

    return pool.query(`
        UPDATE cuti SET approval_hrd=${manager} WHERE cuti.id = ${id}
    `)
}


module.exports = {
    postCutiModels,
    getCutiUserIdModels,
    getAllCutiModels,
    getCutiIdModels,
    updateCutiManagerModels,
    updateCutiHrdModels,
    getCutiManagerModels
}