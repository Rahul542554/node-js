const {MongoClient} = require('mongodb')//to import mongodb instance.
const url= 'mongodb://localhost:27017';//giving the address of the database     
const databaseName='e-comm'//givind the name of the database from where we are fetching the data
const client= new MongoClient(url);//to fetch the data from mongodb

async function getData()
{
    let result = await client.connect();//to connect with client
    db= result.db(databaseName);
    collection = db.collection('products');//from which collection we want to fetch data
    let data = await collection.find({}).toArray();//to get data from collection
    console.log(data)


}

getData();
