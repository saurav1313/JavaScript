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
console.log("Going to register my 1st set of handler");
p.
then(function fullfillHandler1(value) {console.log("Inside fullfill Handler1 with value",value);
    console.log("Promise after the fullfillment is",p);
},

function RejectHandler1(value){console.log("Inside Rejection Handler1 with value",value);
    console.log("Promise after the rejection is",p);
}
);
console.log("Going to register my 2nd set of handler");
p.
then(function fullfillHandler2(value) {console.log("Inside fullfill Handler2 with value",value);
    console.log("Promise after the fullfillment is",p);
},

function RejectHandler2(value){console.log("Inside Rejection Handler2 with value",value);
    console.log("Promise after the rejection is",p);
}
);
console.log("Ending......!")

for(let i = 0; i<10000000000; i++){}
console.log("Ending the Loop also");