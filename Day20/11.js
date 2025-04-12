const iphone = {
    name : "Iphone 14 pro",
    price : 78000,
    Description : "Everyone can afford it",
    rating : 8.8,
    display : () =>{

        let ipad = {
            name : "Ipad",
            price: 23000,
            Description : "Write Smoothly",
            rating : 10,
            print : () =>{
                console.log(this);
            }
        }
        ipad.print();
    }
}

iphone.display();