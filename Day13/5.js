const arr = [1,2,3,4,5,6];
function sum(prevResult, currResult){
    console.log(prevResult, currResult);
    return prevResult+currResult;
}
const result = arr.reduce(sum);
console.log(result);