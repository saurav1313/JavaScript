function addPrice(prevResult, currValue){

    console.log(prevResult, currValue);

let newPrice = prevResult.price + currValue.price;
return{price: newPrice};
}

let cart = [{price:100000, name:"Iphone"},{price:1000, name:"backcover"}, {price:500, name:"temperglass"}];
const totalPrice = cart.reduce(addPrice);
console.log(totalPrice);
