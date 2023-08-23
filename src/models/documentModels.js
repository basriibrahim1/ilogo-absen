const pool = require('../config/db')


const postDocumentModels = (data) => {
    const {user_id, file_name, size, path_url, source_type, source_id} = data
    const date = new Date().toISOString()

    return (
        pool.query(`INSERT INTO document(user_id, file_name, size, path_url, source_type, source_id, created_at) VALUES(${user_id}, '${file_name}','${size}', '${path_url}', '${source_type}', ${source_id}, '${date}')`)
    )
}

module.exports = {
    postDocumentModels
}