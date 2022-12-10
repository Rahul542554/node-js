const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.update(
    //to update single data write update one for multiple updates write only update as written in code.
    { name: "max 5" },//to find which product we want to update
    {
      $set: { name: "max pro 5", price: 1000 },// to update the value of the data.
    }
  );
  console.log(result);
};

updateData();
