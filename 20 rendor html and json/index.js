const express = require('express'); //to import the express module into our project.
const app = express();
//method for adding routes
app.get('/', (req, res) => {
    res.send(`
    <h1>Welcome , This is home page</h1> <a href="/about"> Go to the homepage</a>`
    
    );//to rendor html on page load and to go to another page.
});

app.get('/about', (req, res) => {

    res.send(`
    <input type="text" placeholder="user name" "value=${req.query.name}"/>
    <button>click me</button>
    `);//to get the value of the user name.
});

app.get('/help', (req, res) => {//to rendor json on page load.
    res.send({
        name: "anil",
        email:"rahulsinghchauhanrj@gmail.com",

    });
});

app.listen(5000);// to start the server on port 5000

