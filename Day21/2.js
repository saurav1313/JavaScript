class Products{
    #name;
    // price;
    // Description;

    constructor(n,p,d){
        this.#name = n;
        this.price = p;
        this.Description = d;
    }
    display(){
        console.log(this.#name, this.price,this.Description);
    }
}
const p = new Products("Bag",600,"This is very cool quality");
p.name = -1;
console.log(p);
p.display();