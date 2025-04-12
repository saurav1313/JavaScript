function Download(url, time){
    return new Promise(function exec(resolve,reject){
        console.log("Starting to downlaod data from",url);
        setTimeout(function down(){
console.log("Downloading Completed");
const content = "ABCDEF";
if(time > 3000){
   reject(erroe)
}else
resolve(content);
        },time);
    })
}

const p1 = Download("www.abc1.com",2000);
const p2 = Download("www.abc2.com",1000);
const p3 = Download("www.abc3.com",1000);

Promise.all([p1,p2,p3]).then(function fullfilHandler(values){
    console.log(values);
})