const fs = require("fs"); //to import filesystem into our file.
const path = require("path");// to select the path where you want to create new files.
const dirPath=path.join(__dirname,"crud"); // to give the name of path
const filePath = `${dirPath}/apple.txt`; 

//fs.writeFileSync(filePath,'This is a simple text file');// to "create" a file run command "node index.js"  in your terminal.

//to read a file "to read a file as normal text you have to write utf8.
// fs.readFile(   filePath, 'utf8',(err,item)=>{
//     console.log(item)
// });

// //to update a file
// fs.appendFile(filePath, 'and file name is apple.txt',(err)=>{//this will and this text into the same file.
//     if(!err) console.log("file is updated successfully")//if there is no error
// });

// //to rename the file name
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("filename is updated successfully")
// });

//to delete the file
// fs.unlinkSync(`${dirPath}/fruit.txt`)