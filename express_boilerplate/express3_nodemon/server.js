const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Navigate to http://localhost:3000");
    console.log("Server is running on port 3000.");
})

app.get("/", (req, res) => {
    res.send(`<form action='/' method='POST'>
    Write your name: <input type='text' name='nome'>
    <button>Submit</button>
    </form>`)
});

app.post('/', (req, res) => {
    res.send(`Conteúdo recebido!`);
})

app.get('/contato', (req, res) => {
    res.send(`<h1>Obrigado por entrar em contato!</h1>`)
})


