const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath));
app.get("", (_, resp) => {
  resp.sendFile(`${publicPath}/index.html`); //TO REMOVE THE .html extension from our document address
});

app.get("/contact", (_, resp) => {
  resp.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (_, resp) => {
  resp.sendFile(`${publicPath}/help.html`);
});

app.get("*", (_, resp) => {
  resp.sendFile(`${publicPath}/nopage.html`);
}); //here we are using * so that when ever user types a url which is not valid so user will be redirected to the error or 404 pages as we given in path

app.listen(5000);
