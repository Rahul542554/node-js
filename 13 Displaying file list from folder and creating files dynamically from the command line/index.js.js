//creating files in loop from command line and displaying file list from command line.
const fs= require('fs');//to import the file system
const path=require('path');//to get a path of the folder where we want to create files..
const dirPath= path.join(__dirname,'13files');//to get the path of the current directory.
console.log(dirPath)

for(i=0;i<5;i++)//to create files in loop from coommand line it will create files in given folder named 13files.

 {
   fs.writeFileSync(`${dirPath}/hello${i}.txt`,"some simple text in file")
//to make dynamically generated files just add ${i}.
 }
// fs.readdir(dirPath,(err,files)=>{//to get the files in console
//     files.forEach((item)=>{
//         console.warn("file name is : ",item)
//     });
// }
// )

//uncomment the code to see the output ....you will see the file names in the command line or console.




