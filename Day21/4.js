class Product{
    #name;
    price
    Desc

    constructor(n,p,d){
        this.#name = n;
        this.price = p;
        this.Desc = d;
    }

    setName(n){
        console.log(n, typeof n);
if(typeof(n) != 'string'){
    console.log("Invalid name Passed");
    return;
}
this.#name = n;
    }

   set setPrice(p){
        if(p < 0) return
            this.price = p;
    }
get getName(){
    return this.#name;

    
    }
    display(){
        console.log(this.#name, this.price, this.Desc);
    }
}

const p = new 
Product("Bag",500,"Very Cool");
p.setName(-1);
console.log(p);
console.log(p.name);

