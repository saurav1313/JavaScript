function Download(url){
    return new Promise(function exec(resolve,reject){
        console.log("Starting to downlaod data from",url);
        setTimeout(function down(){
console.log("Downloading Completed");
const content = "ABCDEF";
resolve(content);
        },1000);
    })
}

const p1 = Download("www.abc1.com");
const p2 = Download("www.abc2.com");
const p3 = Download("www.abc3.com");

Promise.all([p1,p2,p3]).then(function fullfilHandler(values){
    console.log(values);
})