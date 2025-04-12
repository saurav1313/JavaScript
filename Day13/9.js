function doTask(fn, x){
    fn(x*x);
}
doTask(function exec(num){
    console.log("Wao num is", num);
},9);