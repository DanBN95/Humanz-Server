const csvtojson = require('csvtojson');
const User = require('../db/schemas/User');

async function initUsersDB() {
    csvtojson()
    .fromFile("./public/humanz-ex-users.csv")
    .then(csvData => {
        //console.log(csvData);
        User.insertMany(csvData)
        .then(() => {
            console.log("Data inserted")    //  Sucess
        })
        .catch(e => console.log(e))
    });
};

module.exports = {
    initUsersDB
}