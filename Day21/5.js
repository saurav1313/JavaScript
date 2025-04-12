var obj = {
    name : "Satvindar Singh",
company : "Massi",
display:() => {
console.log(this.name,"Works on",this.company);
}
}

var obj1 ={
    name : "Saurav",
    company : "Stech",
    display:() =>{
        setTimeout(() =>{
     console.log(this.name,"Work on",this.company);       
        },3000)
    }
}

var obj2 ={
    name : "Sumit",
    company : "Microsoft",
    display: () =>{
        console.log(this);
        setTimeout(()=>{
            console.log(this.name,"Work on", this.company);
        },3000)
    }
}
obj2.display();

console.log(obj2);