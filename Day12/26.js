function square(el){
    return el*el;
}

function cube(x){
    return x*x*x;
}

function isEvenorOdd(num){
    if(num % 2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
}
const arr = [1,2,3,4,5];

const result = arr.map(square);
console.log(result);

const cuberesult = arr.map(cube);
console.log(cuberesult);

const isOddEven = arr.map(isEvenorOdd);
console.log(isOddEven);