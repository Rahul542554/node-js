console.log("starting up")

setTimeout(() => {
    console.log("i am 2 sec. late")
}, 2000);

setTimeout(() => {
    console.log("i am 0 sec. late but i will be executed after synchronous programs.")
}, 0);

setTimeout(() => {
    console.log("timeout is not set but i will be executed after synchronous programs because i am inside setTimeout function.")//if you dont give any timeout it will be 0 seconds by default.
}, );

console.log("finishing up")