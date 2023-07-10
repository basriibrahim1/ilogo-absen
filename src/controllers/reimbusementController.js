const cloudinary = require('../config/cloudinary');
const { postReimbusementModels, getReimbusementModels } = require("../models/reimbusementModels");

const reimbusementController = {
    postReimbusementController: async(req,res) => {
        try {
            const imageUrl = await cloudinary.uploader.upload(req.file.path, {folder: 'reimbusement'})
    
            if (!imageUrl) {
                res.status(401).json({
                  message: "Failed to input data, please try again later",
                });
              }
            
            let data = {
                user_id: Number(req.body.user_id), 
                kategori: req.body.kategori,
                perusahaan: req.body.perusahaan,
                event: req.body.event,
                tanggal: req.body.tanggal, 
                nilai: req.body.nilai, 
                catatan: req.body.catatan,
                photo: imageUrl.secure_url,     
            }

            console.log(data)

            await postReimbusementModels(data)
            res.status(200).json({
                message: "Berhasil mengisi reimbusement",
            });
        } catch (error) {
            res.status(400).json({
                message: "Gagal mengisi reimbusement",
                error: error
            });
        }
    },

    getReimbusementController: async(req,res) => {
        try {
            const {id} = req.params

            const result = await getReimbusementModels(Number(id))
            res.status(200).json({
                message: `daftar reimbusement dari id ${id}`,
                data: result.rows
            });
        } catch (error) {
            res.status(400).json({
                message: `gagal mendapatkan data reimbusement dari id ${id}`,
            });
        }
    }
}


module.exports = reimbusementController