function createPromise(){
    return new Promise(function exec(resolve,reject){
        setTimeout(function(){
            console.log("Rejecting the promise");
            reject("Done");
        });
        },1000);
}

let p = createPromise();
p.then(function fulfillHandler1(value){
    console.log("We fullfilled1 with a value", value);
}, function rejectHandler1(value){
    console.log("We reject1 with a value", value);
});
p.then(function fulfillHandler2(value){
    console.log("We fullfilled2 with a value", value);
}, function rejectHandler2(value){
    console.log("We reject2 with a value", value);
});

for(let i = 0; i<1000000000; i++){}
console.log("Ending"); 