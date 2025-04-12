let arr = [2,7,8];
console.log(typeof arr);

let obj ={
    x : 10,
    y : 20
};

Object.freeze(obj);
obj.z = 20;
console.log(obj);


let obj1 = {x:10, y:20};

// Object.seal(obj1);
obj1.x = 30;
obj1.z = 99;

console.log(obj1);


const obj2 = {
    x : 1, y : 2
}

obj2.x = 10;
obj2.z = 101;
// obj2 = 99;

console.log(obj2);