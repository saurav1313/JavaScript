function isEven(nums){
    if(nums % 2 == 0){
      console.log("Even");
    }
    else{
       console.log("odd");
    }
}

for(let i = 0; i<50; i++){
    console.log(i,"is",isEven(i));
}