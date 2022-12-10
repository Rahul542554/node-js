// console.log("i am an asynchronous task");

// setTimeout(()=>{
// console.log(" i am an asynchronous task but will get completed after 2 ms after execution of those tasks whom don't have setTimeout");
// },2000);

// console.log("i am also anasynchronous task");



//drawback of asynchronous programming

let a=10;
let b=0;

setTimeout(() => {
    b=20
}, 2000);

console.log(a+b); //in that case the result will be 10 because here console.log doesn't have any setTimeout so it will take variables declared  before setTimeout.