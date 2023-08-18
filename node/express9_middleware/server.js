const express = require("express");
const routes = require('./routes');
const path = require('path');
// const middlewares = require('./src/middlewares/middleware')
const {middlewareGlobal} = require('./src/middlewares/middleware')

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
// app.use(middlewares); // Exemplo de middleware global, passando por todas as rotas.
app.use(middlewareGlobal); // Outra forma de implementar middleware global.
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

app.listen(3000, () => {
    console.log("Navigate to http://localhost:3000");
    console.log("Server is running on port 3000.");
});




