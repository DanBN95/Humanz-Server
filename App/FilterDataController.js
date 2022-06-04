const { getUser } = require("../services/user.service");

async function filterDataController (req,res) {
    try {
        const filter = req.body;

        if (!filter) {
            return res.status(400).json({message: "Missing filter"});
        }

        const value = Object.values(filter)[0];
        const key = Object.keys(filter)[0];

        let filteredUsers;
        switch(key) {
            case 'Name':
                filteredUsers = await getUser({ Name: { "$regex": value, "$options": "i" }});
                break;
            case 'Email':
                filteredUsers = await getUser({ Email: { "$regex": value, "$options": "i" }});
                break;
            case 'ID':
                filteredUsers = await getUser({ ID: { "$regex": value, "$options": "i" }});
                break;
            case 'Phone':
                filteredUsers = await getUser({ Phone: { "$regex": value, "$options": "i" }});
                break;
            case 'IP':
                filteredUsers = await getUser({ IP: { "$regex": value, "$options": "i" }});
                break;
        }

        // const filteredUsers = await getUser({ Name: { "$regex": value, "$options": "i" }});
        
        if (!filteredUsers) {
            return res.status(500).json({message: "error getting users from db"});
        }

        return res.status(200).json({
            message: 'get users suceessfully',
            filteredUsers
        })
    
    } catch(e) {
        return res.status(500).json({message: "error getting users from db"});
    }
}

module.exports = filterDataController;