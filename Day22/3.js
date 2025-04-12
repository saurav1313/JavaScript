function Product(n,p,c){
    this.name = n;
    this.price = p;

    Catogery.call(this,c);
}

function Catogery(c){
this.catogeryName = c;
this.getCatogeryName = function(){
    console.log(this.catogeryName);
}
}

let p = new Product("Iphone",100000,"Electronics");
p.getCatogeryName();