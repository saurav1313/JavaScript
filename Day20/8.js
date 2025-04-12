let iphone = {
    name : "Iphone 15 Pro",
    Price : 120000,
    Description : "This is latest version",
    Rating : 9.3,

    Display(){
        console.log("This is First Gadaget", this);
    }

}

let Mackbook = {
    name : "Macbook M2",
    Price : 200000,
    Description : "This is latest version",
    Rating : 9.0,

    Display(){
        console.log("This is second Gadaget", this);
    }
}

// iphone.Display();
Mackbook.Display();
console.log(this);