function Process(){
    let i = 0;
    let j = [1,2,3];
    let k = 1;
    function InnerProcess(){
        i +=1;
        console.log(i);
        return i;}
    return InnerProcess();
}
x = Process();
console.log(x);