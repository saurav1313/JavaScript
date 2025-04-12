function getRandomInt(max){
    return Math.floor(Math.random()*max);
}


function createPromiseWithTimeOut(){
    return new Promise(function executor(resolve, reject){
        console.log("Entering the executor callback in promise constructor");
setTimeout(function(){
    let num = getRandomInt(10);
    if(num % 2 == 0){
        resolve (num);
    }
    else{
        reject(num);
    }
},10000);
console.log("Exiting the executor callback in the promis constructor");
    });
}

console.log("Starting....!");
let p = createPromiseWithTimeOut();
console.log("Now we are waiting to promise complete");
console.log("Currently my Object is looking like.....",p);
p.
then(function fullfillHandler(value) {console.log("Inside fullfill Handler with value",value);
    console.log("Promise after the fullfillment is",p);
    setTimeout(function p(){console.log("Ended 0s timer")},0);
    console.log("Exiting the fullfillment handler 1");
},

function RejectHandler(value){console.log("Inside Rejection Handler with value",value);
    console.log("Promise after the rejection is",p);
    setTimeout(function p(){console.log("Ended 0s timer")},0);
    console.log("Exiting the fullfillment handler 1");
}
);