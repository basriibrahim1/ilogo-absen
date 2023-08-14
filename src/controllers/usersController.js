const { getUserModels, getUserIdModels, userUpdateModels } = require("../models/usersModels")
const cloudinary = require('../config/cloudinary')

const UsersController = {
    getUserController: async (req, res) => {
        try {
            let user = await getUserModels()
            res.status(200).json({
                message: "List For User",
                data: user.rows,
            });
        } catch (error) {
            res.status(400).json({
                message: "No User Found",
            });
        }
    },
    getUserIdController: async (req, res) => {
        const {id} = req.params
        try {
            let user = await getUserIdModels(id)
            if(user.rows.length == []){
                res.status(400).json({
                    message: `No Id ${id}`,
                });
            } else {
                res.status(200).json({
                    message: `user id ${id}`,
                    data: user.rows
                });
            }        
        } catch (error) {
            res.status(400).json({
                message: `No Id ${id} `,
            });
        }
    },
    userUpdateController: async(req, res) => {
        const id = req.params.id
        try {
            const users = await getUserIdModels(Number(id))
            const user = users.rows[0]

            const formatBirthday = user.birthday.toLocaleDateString()

            if(req.file){
                const imageUrl = await cloudinary.uploader.upload(req.file.path, {folder: 'profile'})
    
                const data = {
                    name: !req.body.name ? user.name : req.body.name,
                    password: !req.body.password? user.password : req.body.password,
                    phone: !req.body.phone ? user.phone : req.body.phone,
                    photo: imageUrl.secure_url,
                    birthday: !req.body.birthday ? formatBirthday : req.body.birthday,
                    gender: !req.body.gender ? user.gender : req.body.gender,
                    status: !req.body.status ? user.status : req.body.status,
                    position: !req.body.position ? user.position : req.body.position
                }
                await userUpdateModels(data, id)
                res.status(200).json({
                    message: `Success To Update Data`,
                    data: data
                });
            } else {
                const data = {  
                    name: !req.body.name ? user.name : req.body.name,
                    password: !req.body.password ? user.password : req.body.password,
                    phone: !req.body.phone ? user.phone : req.body.phone,
                    photo: user.photo,
                    birthday: !req.body.birthday ? formatBirthday : req.body.birthday,
                    gender: !req.body.gender ? user.gender : req.body.gender,
                    status: !req.body.status ? user.status : req.body.status,
                    position: !req.body.position ? user.position : req.body.position
                }        

                await userUpdateModels(data, id)
                res.status(200).json({
                    message: `Success To Update Data`,
                });
            }

        } catch (error) {
            res.status(500).json({
                message: `Failed To Update Data `,
                error
            });
        }
    }
}

module.exports = UsersController