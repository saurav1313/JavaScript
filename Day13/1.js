const newArry = [2,4,6,7,8,9];
function print(element, idx){
    return `Element at index ${idx} is ${element}`;
}
const result = newArry.map(print);
console.log(result);