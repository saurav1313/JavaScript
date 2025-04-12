const Player1 = {
    firstName : "Virat",
    LastName : "Kohli",
    JersyNo : 18,
    isBowl : false,
    NoBat : 3,
    getDetails : function(){
        console.log(this.fisrtName,this.LastName,"and which jersy number is : ",this.JersyNo,this.isBowl,"and it is batting at number",this.NoBat);
    }
}

const obj = function (){
    console.log(this.getDetails
        ()
    );
}

let x = obj.bind(Player1);
x();