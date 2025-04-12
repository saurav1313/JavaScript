function f(x, fn){
    console.log(x,fn);
    fn();
}
f(10, function exec(){
    console.log("i am expression pasted to a HOF");
})