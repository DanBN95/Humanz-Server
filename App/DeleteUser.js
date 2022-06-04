const { deletedUser } = require('../services/user.service');

async function deleteUser(req, res) {
    try {
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({message: "User id must be provided"});
        }

        const isDeleted = await deletedUser({ _id: userId });
        if (!isDeleted) {
            return res.status(500).json({message: "Failed deleting user from db"}); 
        }

        res.status(200).json({
            message: "Successfully remove user from db",
            isDeleted
        });
    
    } catch(e) {
        console.log("error deleting user");
    }
}

module.exports = deleteUser;

