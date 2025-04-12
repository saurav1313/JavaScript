function createPromise(){
    return new Promise(function exec(resolve,reject){
        console.log("Resolving the promise");
        resolve("Done");
    });
}

setTimeout(function process(){
    console.log("Timer Completed");
},0);

let p = createPromise();
p.then(function fulfillHandler1(value){
    console.log("We fullfilled1 with a value", value);
}, function rejectHandler(){});
p.then(function fulfillHandler2(value){
    console.log("We fullfilled2 with a value", value);
}, function rejectHandler(){});
p.then(function fulfillHandler3(value){
    console.log("We fullfilled3 with a value", value);
}, function rejectHandler(){});
for(let i = 0; i<1000000000; i++){}
console.log("Ending"); 