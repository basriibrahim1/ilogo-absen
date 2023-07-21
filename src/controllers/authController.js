const { getUserEmailModels } = require("../models/usersModels")

const AuthController = {
    loginUser: async(req,res) => {
        try {
            if (!req.body.email) {
                return res.status(404).json({ message: 'Masukan Email' });
              }
              if (!req.body.password) {
                return res.status(404).json({ message: 'Masukan Password' });
              }
          
              let { rows: [users] } = await getUserEmailModels(req.body.email);
          
              if (!users) {
                return res.status(400).json({
                  message: 'Email yang anda masukan salah'
                });
              }
          
              if (users.password !== req.body.password) {
                return res.status(400).json({
                  message: 'Password yang anda masukan salah'
                });
              }
          
              return res.status(200).json({
                message: 'Login berhasil',
                data: users
              });
        } catch (error) {
            return res.status(200).json({
                message: "Login Gagal",
            });
        }
    }
}

module.exports = AuthController