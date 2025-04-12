function fun(fn){
    console.log("welcome to fun");
    fn();
}
fun(function(){
    console.log("Wow so much fun");
})