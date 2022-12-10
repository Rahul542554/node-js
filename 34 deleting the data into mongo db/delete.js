const dbConnect = require('./mongodb');

const deleteData=async ()=>{
let data = await dbConnect();
let result = await data.deleteMany({name:'max 7'})//to delete single data write deleteone or more than one write deleteone
console.log(result)

}
 
deleteData();