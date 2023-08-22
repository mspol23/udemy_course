const Signup = require('../models/SignupModel');

exports.index = (req, res) => {
    res.render('signup')
};

exports.register = (req, res) => {
    const signup = new Signup(req.body);
    console.log(signup);
    signup.validate();
    res.send();
}
