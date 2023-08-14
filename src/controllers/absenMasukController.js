const { postAbsenMasukModels, getAbsenMasukIdModels, } = require("../models/absenMasukModels")
const cloudinary = require('../config/cloudinary')

const AbsenMasukController = {
    postAbsenMasukController: async(req,res) => {
        try {
            const imageUrl = await cloudinary.uploader.upload(req.file.path, {folder: 'masuk'})
    
            if (!imageUrl) {
                res.status(401).json({
                  message: "Failed to input data, please try again later",
                });
              }

            let data = {
                user_id: Number(req.body.user_id), 
                photo: imageUrl.secure_url, 
                longitude: req.body.longitude, 
                latitude: req.body.latitude, 
            }

            await postAbsenMasukModels(data)
            res.status(200).json({
                message: "Berhasil Absen Masuk",
                data: data
            });
        } catch (error) {
            res.status(400).json({
                message: "Gagal Absen Masuk",
                error: error
            });
        }
    },
    getAbsenMasukIdController: async(req, res) => {
        try {
            const id = req.params.id
            let result = await getAbsenMasukIdModels(id)
            res.status(200).json({
                message: "Berhasil Mendapatkan Id User Absen Masuk",
                data: result.rows
            });
        } catch (error) {
            res.status(400).json({
                message: "Gagal Mendapatkan user Absen Masuk",
                error: error
            });
        }
    }
}


module.exports = AbsenMasukController