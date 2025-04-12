function Process(){
    let i = 0;
    function InnerProcess(){
        i += 1;
        return i;
    }
    return InnerProcess;
}
let result = Process();
console.log(result);

console.log("First Time caliing result",result());
console.log("Second Time caliing result",result());
console.log("Third Time caliing result",result());
console.log("Fourth Time caliing result",result());