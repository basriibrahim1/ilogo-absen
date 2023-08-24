const { postDocumentModels } = require("../models/documentModels")
const cloudinary = require('../config/cloudinary');


const documentController = {
    postDocumentController: async (req, res) => {
        try {
            if (req.files && req.files.length > 0) {
                const imageUrls = await Promise.all(
                    req.files.map(async (file) => {
                        const imageUrl = await cloudinary.uploader.upload(file.path, { folder: 'reimbusement' });
                        return imageUrl.secure_url;
                    })
                );
    
                const data = {
                    user_id: Number(req.body.user_id),
                    file_name: req.file.filename,
                    size: req.body.size,
                    path_url: imageUrls, // Store array of image URLs
                    source_type: req.body.source_type,
                    source_id: Number(req.body.source_id),
                };
    
                await postDocumentModels(data);
                res.status(200).json({
                    message: 'Create documents success',
                });
            } else {
                res.status(400).json({
                    message: 'No files uploaded',
                });
            }
        } catch (error) {
            res.status(400).json({
                message: 'Create documents failed',
                error: error,
            });
        }
    },    
    
}

module.exports = documentController