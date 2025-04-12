let iphone = {
    name : "Iphone 15 Pro",
    Price : 120000,
    Description : "This is latest version",
    Rating : 9.3,

    Display : () =>{
       console.log(this);
    }

}

let Mackbook = {
    name : "Macbook M2",
    Price : 200000,
    Description : "This is latest version",
    Rating : 9.0,

    Display : function(){
      console.log(this);
    }
}

iphone.Display();
Mackbook.Display();
console.log(this);