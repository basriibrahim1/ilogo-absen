const cloudinary = require('../config/cloudinary');
const { postCutiModels, getCutiModels } = require('../models/cutiModels');

const cutiController = {
    postCutiController: async(req,res) => {
        try {
            const imageUrl = await cloudinary.uploader.upload(req.file.path, {folder: 'cuti'})
    
            if (!imageUrl) {
                res.status(401).json({
                  message: "Failed to input data, please try again later",
                });
              }

            let data = {
                user_id: Number(req.body.user_id), 
                kategori: req.body.kategori,
                alasan: req.body.alasan,
                keterangan: req.body.keterangan,
                photo: imageUrl.secure_url, 
                dari: req.body.dari, 
                sampai: req.body.sampai, 
                status: req.body.status
            }

            await postCutiModels(data)
            res.status(200).json({
                message: "Berhasil mengisi cuti",
            });
        } catch (error) {
            res.status(400).json({
                message: "Gagal mengisi cuti",
                error: error
            });
        }
    },
    getCutiController: async(req,res) => {
        try {
            const {id} = req.params

            const result = await getCutiModels(Number(id))
            res.status(200).json({
                message: `daftar cuti dari id ${id}`,
                data: result.rows
            });
        } catch (error) {
            res.status(400).json({
                message: `gagal mendapatkan data cuti dari id ${id}`,
            });
        }
    }
}


module.exports = cutiController