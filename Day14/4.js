function timeConsumingByLoops(){
    console.log("Strat Here");
    for(let i = 0; i< 10000000000; i++){
        //code of block
    }
    console.log("Loop Ends");
}

function timeConsumingByRunTimeTimer0(){
    console.log("Start Timer");
    setTimeout(function exec(){
        console.log("completed timer0");
    },5000);
}
function timeconsumingRunTimeTimer1(){
    console.log("Start Timer");
    setTimeout(function exec(){
        console.log("completed Timer1");
    },0);
}

function timecounsumingByRuntimer2(){
    console.log("Start Timer");
    setTimeout(function exex(){
        console.log("completed Timer2");
    },200);
}
console.log("Hi");
timeConsumingByLoops();
timeConsumingByRunTimeTimer0();
timeconsumingRunTimeTimer1();
timecounsumingByRuntimer2();
timeConsumingByLoops();
console.log("Byeee");