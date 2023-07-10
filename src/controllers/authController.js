const { getUserEmailModels } = require("../models/usersModels")

const AuthController = {
    loginUser: async(req,res) => {
        !req.body.email && res.status(404).json({message: 'Masukan Email'})
        !req.body.password && res.status(404).json({message: 'Masukan Password'})

        let {rows:[users]} = await getUserEmailModels(req.body.email)

        if(!users){
            return res.status(400).json({
                message: "Email yang anda masukan salah"
            });
        }

        if(users.password !== req.body.password){
            return res.status(400).json({
                message: "Password yang anda masukan salah"
            });
        } else {
            return res.status(200).json({
                message: "Login berhasil",
                data: users
            });
        }
    }
}

module.exports = AuthController