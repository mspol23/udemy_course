const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController');

// Rotas 'home':
route.get('/', homeController.homepage);
route.post('/', homeController.formContent);

//Rotas 'contact':
route.get('/contact', contactController.contactHome)

module.exports = route;