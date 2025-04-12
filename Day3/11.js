function isEvenOdd(num){
    if(num % 2 == 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
let x = 10;
let y = 20;
let z = 81;

console.log("X is", isEvenOdd(x));

console.log("Y is", isEvenOdd(y));

console.log("Z is", isEvenOdd(z));