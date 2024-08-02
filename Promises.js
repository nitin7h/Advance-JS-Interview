const promise = new Promise((resolve, reject) => {
    console.log("Hi");
    // resolve("Succes")
    reject("Rejected")
})


promise.then((res) => {
    console.log("Resolve : ", res);
}).catch((err) => {
    console.log('Err :', err);
})