const { getUserModels, getUserIdModels } = require("../models/usersModels")


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
            res.status(200).json({
                message: `user id ${id}`,
                data: user.rows,
            });
        } catch (error) {
            res.status(400).json({
                message: `No Id ${id} `,
            });
        }
    },
}

module.exports = UsersController