let isUserPrime = true;
let isUserDiscovery = true;
let isUserAcorn = true;
if(isUserPrime){
    if(isUserDiscovery){
        if(isUserAcorn){
            console.log("Enjoy the Acorn, prime & discovery content");
        }
       else{
        console.log("Enjoy the both Prime & Discovery Content");
       }
    }
    else if(isUserAcorn){
        console.log("Enjoy the both Prime & Acorn");
    }
    else{
        console.log("Enjoy the Prime Content");
    }
}
else{
    console.log("Please buy the subscription of prime content");
}