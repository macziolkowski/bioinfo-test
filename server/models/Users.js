const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ip: {
        type: String,
        required: true
    }
});

mongoose.model('Users', UserSchema);

module.exports = mongoose.model('Users');
