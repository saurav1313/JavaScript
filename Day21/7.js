const Player1 = {
    FisrtName : "Viart",
    LastName : "Kohli",
    isBalling : false,
    NoAtBatting : 3,

    getDetails : function(){
        console.log(this.FisrtName,this.LastName,"Number at batting",this.NoAtBatting,this.isBalling);
    }
}

const obj = function(x,y){
    console.log(x+y);
    this.getDetails();
}
obj.call(Player1,15,3);