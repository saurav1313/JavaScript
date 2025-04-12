function Download(url){
    return new Promise(function exec(resolve,reject){
        console.log("Starting the download data from",url);
        setTimeout(function down(){
console.log("Download completed");
const content = "ABCDEF";
reject(content);    
        },1000);
    })
}

async function Steps(){
    try{
        console.log("Starting Steps");
        const downloadData = await Download("ww.xyz.com");
        return downloadData ;
    }
    catch(error){
console.log("We have handle the error",error);
    }
}

Steps();