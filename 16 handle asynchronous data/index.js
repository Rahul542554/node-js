// //drawback of asynchronous programming

// let a=10;
// let b=0;

// setTimeout(() => {
//     b=20
// }, 2000);

// console.log(a+b); //in that case the result will be 10 because here console.log doesn't have any setTimeout so it will take variables declared  before setTimeout.


//now we will solve that problem with promises...

let a=10;
let b=0;
let waitingdata= new Promise((resolve,reject)=> {
setTimeout(() => {
    resolve(20);

}, 2000);
})

waitingdata.then((data)=> {
b=data
console.log(a+b);
});