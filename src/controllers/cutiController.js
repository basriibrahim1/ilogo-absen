const cloudinary = require('../config/cloudinary');
const { postCutiModels, getAllCutiModels, getCutiUserIdModels, getCutiIdModels, updateCutiHrdModels, getCutiManagerModels } = require('../models/cutiModels');

const cutiController = {
    postCutiController: async(req,res) => {
        const {user_id, kategori_id} = req.body

        try {      
            if(!req.file){
                let data = {
                    user_id: Number(user_id) , 
                    kategori_id: Number(kategori_id),
                    alasan: req.body.alasan,
                    photo: null,
                    keterangan: req.body.keterangan,
                    dari: req.body.dari, 
                    sampai: req.body.sampai, 
                    masuk: req.body.masuk,
                }

                await postCutiModels(data)
                res.status(200).json({
                    message: "Berhasil mengisi cuti",
                    data: data
                });
    
            } else {
                const imageUrl = await cloudinary.uploader.upload(req.file.path, {folder: 'cuti'})

                let data = {
                    user_id: Number(user_id), 
                    kategori_id: Number(kategori_id),    
                    alasan: req.body.alasan,
                    keterangan: req.body.keterangan,
                    photo: imageUrl.secure_url, 
                    dari: req.body.dari, 
                    sampai: req.body.sampai, 
                    masuk: req.body.masuk,
                }

                await postCutiModels(data)
                res.status(200).json({
                    message: "Berhasil mengisi cuti",
                    data: data
                });
                
            }

            
        } catch (error) {
            res.status(400).json({
                message: "Gagal mengisi cuti",
                error: error,
            });
            console.log(error)
        }
    },

    getAllCutiController: async (req, res) => {
        try {
            const result = await getAllCutiModels()

            if(result.rows.length <= 0){
                res.status(500).json({
                    message: `gagal mendapatkan id cuti`,
                });
            } else {
                res.status(200).json({
                    message: `berhasil mendapatkan id cuti`,
                    data: result.rows
                });
            }
        } catch (error) {
            res.status(400).json({
                message: `gagal mendapatkan data cuti`,
            });
        }
    },



    getCutiController: async(req,res) => {
        try {
            const {id} = req.params

            const result = await getCutiUserIdModels(Number(id))

            if(result.rows.length <= 0){
                res.status(500).json({
                    message: `gagal mendapatkan id cuti`,
                });
            } else {
                res.status(200).json({
                    message: `berhasil mendapatkan id cuti`,
                    data: result.rows
                });
            }
        } catch (error) {
            res.status(400).json({
                message: `gagal mendapatkan data cuti`,
            });
        }
    },

    getCutiIdController: async(req, res) => {
        const {id} = req.params

        try {
            const result = await getCutiIdModels(Number(id))
            if(result.rows.length <= 0){
                res.status(500).json({
                    message: `gagal mendapatkan id cuti`,
                });
            } else {
                res.status(200).json({
                    message: `berhasil mendapatkan id cuti`,
                    data: result.rows
                });
            }
        } catch (error) {
            res.status(500).json({
                message: `Internal Server error`,
            });
        }
            
     
    },

    getCutiIdManagerController: async(req, res) => {
        const {id} = req.params
        try {
            const result = await getCutiManagerModels(Number(id))

            if(result.rows.length <= 0){
                res.status(500).json({
                    message: `gagal mendapatkan id cuti`,
                });
            } else {

                res.status(200).json({
                    message: `berhasil mendapatkan id cuti`,
                    data: result.rows
                });
            }

        } catch (error) {
            res.status(500).json({
                message: `Internal Server error`,
            });
        }
    },

    updateCutiController: async() => {
        const {id} = req.params

        const {rows: [user]} = await getCutiIdModels(id)
        
        if(user.role === 'karyawan'){
            await updateCutiHrdModels(id)
        }

    }

}


module.exports = cutiController