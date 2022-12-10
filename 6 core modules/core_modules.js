//this is a globle module because we don't need to import it.
console.log("hello world!")

//this is a non-globle module because we need to import it.
const fs = require("fs");
fs.writeFileSync("hello.txt","code with me")//this will make a new file as we run node commands and it will write code with me in txt file.

//this is the second way for file system. 

var gd = require("fs").writeFileSync;
gd("abc.txt","some code written")//this will make a new file as we run node commands and it and you can give any name to variable.

