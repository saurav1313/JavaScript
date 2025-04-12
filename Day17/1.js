function fetchData(url){
return new Promise(function (resolve, reject){
    console.log("Started Downloading from",url);
    
    setTimeout(function processDownloading(){
        let data = "Dummy Data";
        resolve(data);
        console.log("Downloaded Completed");
    },7000);
});
}

console.log("start");

let promiseObj = fetchData("aksdskfflfsbfs");
promiseObj.then(function A(value){
    console.log("Value is",value);
})
console.log("End");