const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

// Rotas 'home':
route.get('/', homeController.homepage);
route.post('/', homeController.formContent);

//Rotas 'contact':
route.get('/contact', contactController.contactHome)

module.exports = route;