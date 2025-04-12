function CallbackWithDownloaderDummy(url, cb){
    console.log("Started downloading from url",url);
    setTimeout(function exec(){
        console.log("completed downloading after 5s");
        const content = "ABCDEF";
        // cb(content);
        // cb(content);
    },5000);
}

CallbackWithDownloaderDummy("WWW.XYZ.com",function ProcessDownload(data){
console.log("Downloaded data is",data);
})