console.log("abc" == "abc");
let x = "abc";
let y = "abc";
console.log(x == y);

let z = String("abc");
let a = new String("abc");
console.log(z);

console.log(a==x);
console.log(y==a);
console.log(z == a);
console.log("abc" == new String("abc"));

console.log("Triple equal to");
console.log(typeof a);
console.log(typeof b);
console.log(typeof x);
console.log(a===x);
console.log(y===a);
console.log(z === a);
console.log("abc" === new String("abc"));

