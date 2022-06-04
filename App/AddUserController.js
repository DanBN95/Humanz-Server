const { createUser } = require('../services/user.service');

async function addUserController(req, res) {
    try {
        const user_data = req.body;

        if (!user_data) {
            return res.status(400).json({message: "Missing data from user"});
        }

        const isAdded = await createUser(user_data);
        if (!isAdded) {
            return res.status(500).json({message: "Error adding new user to db"});
        }

        res.status(200).json({
            message: 'User successfully added to db',
        })
    
    } catch(e) {

    }
}

module.exports = addUserController;