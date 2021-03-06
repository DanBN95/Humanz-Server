const User = require('../db/schemas/User');
const USERS_PER_PAGE = 100;


async function createUser(details) {
    try{
        return await User.create(details)
    }
    catch(err) {
        console.error(err);
    }

    return false;
}

async function getUser(filter = {}) {
    try {
        const user = await User.find(filter).sort('Name').limit(USERS_PER_PAGE).exec();
        return user;
    }
    catch(err) {
        console.error(err);
    }
     return false;
}

async function updateUser(filter, newDetails) {
    try {
        const updatedUser = await User.findOneAndUpdate(filter, newDetails, {new: true}).exec();
        return updatedUser;
    }
    catch(err) {
        console.error(err);
    }
     return false;
}

async function deletedUser(filter) {
    try {
        const deletedUser = await User.findOneAndDelete(filter).exec();
        if (!deletedUser) {
            return false;
        }
        return true;
    }
    catch(err) {
        console.error(err);
    }
    return false;
}

async function deleteAllUsers() {
    return await User.deleteMany({});
}

module.exports = { 
    createUser,
    getUser,
    updateUser,
    deletedUser,
    deleteAllUsers,
}