function* FetchnextElement(){
    console.log("Inside Generator");

    const x = 10;
    yield 11;

    console.log("Entering after yield");

    // const y = x+ (yield 30);

    const y = x+17;
    console.log("Value of y is",y);
}

console.log("Start");

const iter = FetchnextElement();

console.log("1st",iter.next());
console.log("2nd",iter.next());
console.log("3rd",iter.next());