function blocking_for_loop(){
    for(let i = 0; i<10000000000; i++){
        //Something
    }
}

console.log("Start of the file");

setTimeout(function timer1(){
    console.log("Timer 1 is Done");
},0);
blocking_for_loop();

let x = Promise.resolve("Saurav's Promise");
x.then(function PromiseWithProcess(value){
    console.log("Whose Promise ? ",value);
});
blocking_for_loop();

let y = Promise.resolve("Saurav's Promise 2");
y.then(function PromiseWithProcess(value){
    console.log("Whose Promise ?", value);

    setTimeout(function (){ 
        console.log("Promise Done");
    },0);

})

let z = Promise.resolve("Saurav's Promise3");
z.then(function PromiseWithProcess(value){
    console.log("Whose Promise",value);
})

setTimeout(function timer2(){
    console.log("Timer 2 is Done");
},0);
console.log("End of the File");