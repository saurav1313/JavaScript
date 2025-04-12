function Download(url){
    return new Promise(function exec(resolve,reject){
        console.log("Starting to download the data from",url);
        setTimeout(function down(){
console.log("downlaoding completed");
const content = "ABCDEF";
reject(content);
        },1000);
    })
}

async function Steps(){
    try{
        console.log("Starting Steps");
        const downloadData = await Download("ww.xyz.com");
        return downloadData;
    }
    catch(error){
        console.log("we have handle the error",error);
    }
    finally{
        console.log("endinggg...!");
    }
}

Steps();