let x =
{
    name : "Saurav",
    age : 22
}
let y =
{
    name : "Suman",
    age : 22
} ;
console.log(x["name"]);
console.log(y.name);
//object are mutable
y.name = "satvindar";
console.log(y);

x.marks = 100;
x["company"] = "Google";
console.log(x);

delete x.name;
console.log(x); 