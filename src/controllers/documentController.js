const { postDocumentModels } = require("../models/documentModels")
const cloudinary = require('../config/cloudinary');


const documentController = {
    postDocumentController : async(req, res) => { 
        try {
            if(req.file){
                const imageUrl = await cloudinary.uploader.upload(req.file.path, {folder: 'reimbusement'})

                const data = {
                    user_id: Number(req.body.user_id),
                    file_name: req.body.file_name,
                    size: req.body.size,
                    path_url: [imageUrl.secure_url],
                    source_type: req.body.source_type,
                    source_id: Number(req.body.source_id)
                }
    
                await postDocumentModels(data)
                res.status(200).json({
                    message: 'Create document success'
                })
            }
           
        } catch (error) {
            res.status(400).json({
                message: 'Create document failed',
                error: error
            })
        }
    },
}

module.exports = documentController