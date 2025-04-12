function timeconsumingByloop(){
    console.log("Start here");
    for(let i = 0; i<10000000000; i++){
        //Do Task
    }
    console.log("Looped here");
}

function timeconsumingByRuntimefeature(){
    console.log("Start here");
    setTimeout(function exce(){
        console.log("completed the time");
    },5000);
}

console.log("Hii");

timeconsumingByloop();
timeconsumingByRuntimefeature();
timeconsumingByloop();

console.log("Byee");