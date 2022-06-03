const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name: {
        type: 'string',
        required: true,
    },
    Email: {
        type: 'string',
        required: true,
    },
    ID: {
        type: 'string',
        required: true,
    },
    Phone: {
        type: 'string',
        required: true,
    },
    IP: {
        type: 'string',
        required: true,
    },
});

module.exports = mongoose.model('User', userSchema);