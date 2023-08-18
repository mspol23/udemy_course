require('dotenv').config()

const express = require("express");
const routes = require('./routes');
const path = require('path');
const app = express();

const mongoose = require('mongoose');
const word = encodeURIComponent(process.env.CONNECTIONSTRINGPASS);
const serverUri = `${process.env.CONNECTIONSTRINGFIRSTPART}${word}${process.env.CONNECTIONSTRINGSECONDPART}`
async function main() {
  await mongoose.connect(serverUri)
    .then(() => {
      console.log('Server connected.')
      app.emit('dbConnected')
    })
  .catch(err => console.log(err));
};
main();
const session = require('express-session');
const MongoStore = require('connect-mongo')
const flash = require('connect-flash');

// const middlewares = require('./src/middlewares/middleware')
const {middlewareGlobal} = require('./src/middlewares/middleware')

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
// app.use(middlewares); // Exemplo de middleware global, passando por todas as rotas.
app.use(middlewareGlobal); // Outra forma de implementar middleware global.

const sessionOptions = session({
  secret: 'Testing testing testing',
  store: MongoStore.create({
    mongoUrl: serverUri,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  }
});
app.use(sessionOptions);
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

app.on('dbConnected', () => {
  app.listen(3000, () => {
    console.log("Navigate to http://localhost:3000");
    console.log("Server is running on port 3000.");
    });  
})






