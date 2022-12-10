const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs"); //to tell nodejs that we're using template engine the type of engine is view engine and the name of the engine is EJS. and whenever we use view engine or or ejs so by default we have to make a views folder  and then we can make a document inside that folder and we have to make sure that we are using .ejs extension.

app.get("", (_, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});
//to render the .ejs extension file.
app.get("/profile", (_, resp) => {
  const user = {
    name: "Peter",
    email: "peter@test.com",
    country: "USA",
  };
  resp.render("profile", { user });
});

app.get("/contact", (_, resp) => {
  resp.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (_, resp) => {
  resp.sendFile(`${publicPath}/help.html`);
});

app.get("*", (_, resp) => {
  resp.sendFile(`${publicPath}/nopage.html`);
});

app.listen(5000);
