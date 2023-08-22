const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
});

const LoginModel = mongoose.model('LoginModel', LoginSchema);

module.exports = LoginModel;