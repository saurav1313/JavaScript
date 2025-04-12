function fetchdata(url){
return new Promise(function(resolve,reject){
    console.log("Downloading start here",url);
    setTimeout(function ProcessDownloading(){
        let data = "Dummy Data";
        console.log("Downloading complete");
        resolve(data);
    },7000);
})
}

console.log("Start");
let promiseObj = fetchdata("Sajakjdkls");
promiseObj.then(function A(value){
    console.log("value is",value);
})
console.log("End");