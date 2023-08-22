const emailValidator = require('validator');
const mongoose = require('mongoose');

const SignupSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: [true, 'E-mail required.'],
        validate: { 
            validator: email => {
                emailValidator.isEmail(email);
            },
            message: msg => `${msg.value} is invalid.` 
        }
    },
    password: {type: String, required: true},
});

const SignupModel = mongoose.model('Signup', SignupSchema);

class Signup {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    register() {
        this.validate()
        if(this.errors.length > 0) return
    }

    validate() {
        this.cleanUp();
        // Validação
        // O e-mail precisa ser válido.
        if(!validator.isEmail(this.body.email)) {
            this.errors.push('Invalid e-mail.');
        };
        // limites da senha.
        if(this.body.inputPassword.length < 4 || this.body.inputPassword.length >= 50) {
            this.errors.push('Password length must be between 4 and 50 characters.');
        };
    }

    cleanUp() {
        for(let key in this.body) {
            if(typeof this.body[key] !== "string") {
                this.body[key] = '';
            }
        }
        this.body = {
            email: this.body.inputEmail,
            password: this.body.inputPassword,
        }
    }
};

module.exports = Signup;