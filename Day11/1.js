console.log(Number("124"));
console.log(Number("abcd"));
console.log(Number("0xa"));

let x = NaN;

// let x = 10, -10, 0,1.......etc

console.log(x == NaN);
console.log(isNaN(x));
console.log(isNaN("Saurav"));
console.log(Number.isNaN("Saurav"));
console.log(Number.isNaN(x));

if(typeof(x) == 'number' && x != x){
    console.log(true);
}