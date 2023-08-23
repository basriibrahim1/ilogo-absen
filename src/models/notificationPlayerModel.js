const pool = require('../config/db')

const postNotificationModels = (data) => {
    const {user_id, notification_player_id} = data

    return (
        pool.query(`INSERT INTO cuti(user_id, notification_player_id) VALUES(${user_id}, '${notification_player_id}')`)
    )
}

module.exports = {
    postNotificationModels
}