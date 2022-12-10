const http = require('http');


http.createServer((req,res)=>{
res.write("Hello this is Rahul Singh Chauhan!");
res.end();
}).listen(4500);

//to run the server type node fileName(node Create_server.js) and then go to http://localhost4500 in your browser.
