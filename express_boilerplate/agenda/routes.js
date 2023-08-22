const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const signupController = require('./src/controllers/signupController');

// Rotas 'home':
route.get('/', homeController.index);

// Rotas login:
route.get('/login', loginController.index)

// Rotas sign-up:
route.get('/signup', signupController.index)
route.post('/signup', signupController.register)

module.exports = route;