function process(x, y){
    if(x>y){
        let temp = x;
        x = y;
        y = temp;
        console.log(temp);
    }
    return y-x;
}
console.log(process(10,20));