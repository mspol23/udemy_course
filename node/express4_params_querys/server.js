const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}))

app.listen(3000, () => {
    console.log("Navigate to http://localhost:3000");
    console.log("Server is running on port 3000.");
})

app.get("/", (req, res) => {
    res.send(`<form action='/' method='POST'>
    Write your name: <input type='text' name='name'><br>
    Write your lastname: <input type='text' name='last'><br>
    Write your age: <input type='text' name='age'><br>
    <button>Submit</button>
    </form>`)
});

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`Conteúdo recebido:
    Nome: ${req.body.name}, 
    Sobrenome: ${req.body.last}, 
    Idade: ${req.body.age}`);
})

app.get('/contato', (req, res) => {
    res.send(`<h1>Obrigado por entrar em contato!</h1>`)
})

// params // optional params: ?
app.get('/teste/:idUsers?/:anotherParam?', (req, res) => {
    console.log(req.params)
    res.send(req.params)
});

// params + query
// query start with "?"
app.get('/teste2/:param?/', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.query)
})


