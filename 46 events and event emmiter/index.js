// const express = require("express");
// const EventEmitter = require("events"); // event emitter is basically a class that's why the first alphabet of its is Capital.. classes starts with capital always.
// app = express();

// const event = new EventEmitter(); //its an object , when ever we create a new object we have to use "new" keyword for it.
// let count = 0;
// //to handle an event.
// event.on("countAPI", () => {
//   count++;
//   console.log("event called", count);
// });

// app.get("/", (req, resp) => {
//   resp.send("api called");
//   event.emit("countAPI"); //here we are generating an event.
// });

// app.get("/serch", (req, resp) => {
//   resp.send("Search api called");
//   event.emit("countAPI");
// });

// app.get("/update", (req, resp) => {
//   resp.send("Update api called");
//   event.emit("countAPI");
// });
// app.listen(5000);

