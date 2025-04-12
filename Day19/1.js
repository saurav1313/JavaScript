function* FetchnextElement(){
    console.log("I am inside the Generator");
    yield 1;
    yield 2;
    // return 10;
    console.log("SomeWhere in middle");
    yield 3;
    yield 4;
    // return 10;
}
const iter = FetchnextElement();
console.log(iter);
console.log("1st",iter.next());
console.log("2nd",iter.next());
console.log("3rd",iter.next());
console.log("4th",iter.next());
console.log("5th",iter.next());
console.log("6th",iter.next());
console.log("7th",iter.next());
console.log("8th",iter.next());
console.log("9th",iter.next());
