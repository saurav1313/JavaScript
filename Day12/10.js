function fun(){
    var x = 10;
    var y = 30;
    function gun(){
        var y = 20;
        console.log(x);
        console.log(y);
    }
    gun();
    console.log(x);
    console.log(y);
}
fun();
