const express = require("express");
const app = express();

//adding a middleware or creating a new middleware.and note that middleware has 3 parameters.
const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Please provide your age");
  } else if (req.query.age < 18) {
    resp.send("You are under aged");
  } else {
    next(); //we have to call next() if we want to move further.
  }
};

app.use(reqFilter); // to use the middleware function.
//adding routs
app.get("/", (res, resp) => {
  resp.send("Welcome to Home page");
});

app.get("/users", (res, resp) => {
  resp.send("Welcome to Users page");
});
app.listen(5000);
