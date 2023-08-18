
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require("https")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html")
});

app.post("/", (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    console.log(firstName, lastName, email)
    const data = {
        members: [
            {
                email_address: email,
                status: "Subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);

    const url = "https://mandrillapp.com/api/1.0/list/"
    https.request()
})



app.listen(3000, () => {
    console.log('Server is running on port 3000.')
});


// API key: e03a479765728a6f5250314e1192f9f7-us10
