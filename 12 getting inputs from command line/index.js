//getting input from command line

//to create a file we need to import filesystem
const fs = require('fs');

const input = process.argv;//to take input from command line

if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])//first input is file name and second is data in file.
}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3])//to remove a file we need to type node 12.js remove(filename.txt) and then it will be removed from the filesystem.  
}
else
{
    console.log("invalid input ")//To remove a file from command line just type node currentfile.js(12.js) and then remove (filename) orange or whatever you created as txt file.
}
//commands################################################################
//node 12.js add data.txt "this is a color and a fruit." this is a command to add a file and data into file
//node remove 12.js data.txt "this is a command to remove a file from command  line input"

