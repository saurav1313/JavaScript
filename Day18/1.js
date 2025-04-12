function download(url,cb){
    console.log("Starting to download data from",url);
    setTimeout(function down(){
        console.log("downloading Completed");
        const content = "ABCDEF";
        cb(content);
    },4000);
}

function Writefile(data,cb){
    console.log("Started writting file with",data);
    setTimeout(function write(){
        console.log("completed writing the data in a file");
        const filename = "file.txt";
        cb(filename);
    },5000); 
}

function Upload(url,file,cb){
    console.log("Started uploading",file,"on",url);
        setTimeout(function up(){
            console.log("Upload completed");
            const response = "SUCCESS";
            cb(response);
        },2000);
    }

// download("WWW.XYZ.COM",function process(content){
//     console.log("Download data is",content);
// })

// Writefile("abcdef",function process(name){
//     console.log("File Written with name",name);
// })

download("www.xyz.com",function processDownload(content){
    console.log("We are now going to process to download data");

    Writefile(content, function processWrite(filename){
console.log("We have to download the written file,now will upload");

Upload("ww.xyz.com",filename,function processUpload(response){
    console.log("We have upload with",response);
});
    });
});