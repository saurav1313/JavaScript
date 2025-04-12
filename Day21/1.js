function Product(n,p,d){
    this.name = n;
    this.price = p;
    this.desc = d;
}

const p = new Product("Bags",500,"Very Cool");
console.log(p);