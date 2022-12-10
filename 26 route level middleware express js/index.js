const express = require('express');
const reqFilter= require('./middleware');//to import the middleware functions from another file
const app = express();
const route= express.Router();// importing routers


// app.use(reqFilter);// it will apply middleware function on all routs
route.use(reqFilter)//to use the middleware functions and to apply the routes
app.get('/', (res, resp) => {
    resp.send('Welcome to Home page')
});

app.get('/users', (res, resp) => {
    resp.send('Welcome to Users page')
});

route.get('/about', (res, resp) => {//use route.get to apply the route at this page
    resp.send('Welcome to About page')
});
route.get('/contact', (res, resp) => {//use route.get to apply the route at this page
    resp.send('Welcome to contact page')
});

app.use('/',route);// to use route instance.

app.listen(5000)