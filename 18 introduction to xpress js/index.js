const express = require('express'); //to import the express module into our project.
const app = express();
//method for adding routes
app.get('/', (req, res) => {
    res.send("Welcome , This is home page");
});

app.get('/about', (req, res) => {
    res.send("Welcome , This is about page");
});

app.get('/help', (req, res) => {
    res.send("Welcome , This is help page");
});

app.listen(5000);// to start the server on port 5000

