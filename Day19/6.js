function download(url){
    return new Promise(function exec(resolve,reject){
        console.log("Starting to downlaod Data from",url);
        setTimeout(function down(){
console.log("Download Completed");
const content = "ABCDEF";//Assume Dummy downloaded
resolve(content);
        },1000);
    })
}

function WriteFile(data){
    return new Promise(function exec(resolve, reject){
        console.log("Started Writting file data",data);
        setTimeout(function write(){
console.log("Completed Writting to the file");
const filename = "file.txt";
resolve(filename);
        },5000);
    })
}

function uploadData(file,url){
    return new Promise(function exec(resolve, reject){
        console.log("Started Uploading",file,"on",url);
        setTimeout(function upload(){
            console.log("Upload Completed");
            const response = "SUCCSESS";
            resolve(response);
        },2000);
    })
}

download("www.xyz.com")
.then(
    function ProcessDownload(value){
        console.log("Downloading done with following value",value);
        return WriteFile(value);
    },
  
)

.then(
    function ProcessWrite(value){
        console.log("Data written with the file name", value);
        return uploadData(value,"www.upload.com");
    },
   
)

.then(
    function processUpload(value){
        console.log("We have Upload with",value);
    },
   
)

.catch(function f(error){
    console.log("Handling the Error", error);
})

.finally(function final(){
    console.log("Handle the error");
})