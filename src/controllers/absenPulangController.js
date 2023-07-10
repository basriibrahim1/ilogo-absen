const { postAbsenPulangModels, getAbsenPulangIdModels } = require("../models/absenPulangModels");
const cloudinary = require('../config/cloudinary')


const AbsenPulangController = {
    postAbsenPulangController: async(req,res) => {
        try {
            const imageUrl = await cloudinary.uploader.upload(req.file.path, {folder: 'pulang'})
    
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
                status: req.body.status
            }

            console.log(data)

            await postAbsenPulangModels(data)
            res.status(200).json({
                message: "Berhasil Absen Masuk",
            });
        } catch (error) {
            res.status(400).json({
                message: "Gagal Absen Masuk",
                error: error
            });
        }
    },
    getAbsenPulangIdController: async(req, res) => {
        try {
            const id = req.params.id
            console.log(id)
            let result = await getAbsenPulangIdModels(id)
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

module.exports = AbsenPulangController