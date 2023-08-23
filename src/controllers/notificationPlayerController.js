const { postNotificationModels } = require("../models/notificationPlayerModel")

const NotificationPlayerController = {
    postNotificationController : async (req, res) => {
        try {
            const data = {
                user_id : Number(req.body.user_id),
                notification_player_id: req.body.notification_player_id
            }

            if(!data.notification_player_id){
                res.status(200).json({
                    message: 'Membutuhkan notifikasi player id'
                })    
            }

            await postNotificationModels(data)
            res.status(200).json({
                message: 'Berhasil membuat notifikasi player'
            })
        } catch (error) {
            res.status(401).json({
                message: 'Gagal membuat notifikasi player'
            })
        }
    }
}


module.exports = {
    NotificationPlayerController
}