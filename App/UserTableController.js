const fs = require('fs')
const { getUser } = require('../services/user.service');

const StreamArray = require('stream-json/streamers/StreamArray');
const { get } = require('express/lib/response');
const jsonStream = StreamArray.withParser();

async function userTableController(req, res) {
    try {
        console.log("user table controller");
        const { pageNum, lastID = null } = req.query;

        let allUsers;
        if (lastID) {
            allUsers = await getUser({ _id: { $gte: lastID }});
            //console.log(allUsers.length);
            //console.log(allUsers);
        } else {
            allUsers = await getUser();
        }

        if (!allUsers) {
            return res.status(500).json({message: "Failed get users from db"}); 
        }
        if (allUsers.length == 0) {
            return res.status(500).json({message: "Empty table"});
        }

        const userLastID = allUsers[allUsers.length - 1]._id;


        // fs.createReadStream(allUsers, { encoding: 'utf-8' }).pipe(jsonStream.input);
        
        // jsonStream.on('data', ({key, value}) => {
        //     console.log(key,value)
        // })

        console.log(allUsers[0]);
        console.log(userLastID);
        res.status(200).json({
            message: "Successfully get users from db",
            allUsers,
            userLastID
        });
    
    } catch (e) {
        console.log(e);
    }
}

module.exports = userTableController;