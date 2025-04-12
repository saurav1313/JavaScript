const newArr = [2,4,5,7,8,9];
function print(element, idx){
    return `Element at index ${idx} is ${element}`;
}
const result = newArr.map(print);
console.log(result);


function customMapper(arr,func){
    let result1 = [];
    for(let i = 0; i<arr.length; i++){
        result1.push(func(arr[i],i));
    }
    return result1;
}
const value = customMapper(newArr, print);
console.log(value);