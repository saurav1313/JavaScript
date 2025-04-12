function promiseWithDummy(url){
    console.log("Started Downloading content from",url);
    return new Promise(function exec(resolve, reject){
        setTimeout(function p(){
            console.log("Completed Downloading data in 5 sec");
const content = "ABCDEF";
resolve(content);
// resolve(content);
        },5000);
    })
    
}
  x =  promiseWithDummy("www.xyz.com")
  x
    .then(function fulfillhandler(value){
        console.log("Content Downloaded is",value);
        return "new Promise String"
    },
    function rejectHandler(value){
console.log("reject with",value);
    }
)
.then(function newfulfillHandler(value){
console.log("Value from chained then Promise",value);
})