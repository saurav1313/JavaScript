console.log("Start of the file");

setTimeout(function timer1(){
    console.log("Timer 1 is done");
},0);

for(let i = 0; i<10000000000; i++){
    //something going on
}

let x = Promise.resolve("Saurav's promise");
x.then(function promise(value){
    console.log("Whose Promise ?",value);
});

setTimeout(function timer2(){
    console.log("Timer 2 is done");
},0)
console.log("End of the File");