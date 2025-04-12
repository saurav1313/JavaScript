Promise.resolve("Foo")
.then(
    (String) =>
        new Promise(resolve,reject) =>{
            setTimeout(() =>{
                String += "bar";
                resolve(String);
            },1);
        }),
)

.then((String) =>{
    setTimeout(() =>{
        String += "baz";
        console.log(String);
    },1);
    return String;

})

.then((String) =.{
    console.log("sdsds");
    console.log(String);
})