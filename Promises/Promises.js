// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Task Completed")
//         resolve()

//     }, 2000)

// })

// promise1.then(() => {
//     console.log("Promise1 Resolved");
// }).catch((err) => {
//     console.log("Error : ", err);

// })



// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         const data = false
//         if (!data) {
//             reject("Data is false")
//         } else {
//             resolve("Data is true")
//         }


//     }, 2000)

// })

// promise2.then((res) => {
//     console.log("Promise1 Resolved");
//     console.log(res);
// }).catch((err) => {
//     console.log("error :", err);
// })


// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ name: "Nitin Kumar", role: "Backend Engineer" })
//     }, 1000)
// })

// promise3.then((data) => {
//     console.log("data :", data);
// })


// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ name: "Nitin Kumar", role: "Backend Engineer" })
//     }, 1000)
// })

// promise4.then((data) => {
//     console.log("data :", data);
//     console.log("data name :", data.name);
//     return data.name
// }).then((username) => {
//     console.log("username :", username);
// }).finally(() => console.log("Finnaly Done !"))



// promises without then and cath 

// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const task = false
//         if (!task) {
//             reject("Failed")
//         } else {
//             resolve({ name: "Nitin Kumar", role: "Backend Engineer" })
//         }
//     }, 1000)
// })

// async function promiseConsumed() {
//     try {
//         const res = await promise5
//         console.log("promiseConsumed : ", res);
//     } catch (error) {
//         console.log(error);
//     }
// }
// promiseConsumed()


//  promise in fetching data

// async function promise6() {
//     try {
//         const response = await fetch("URL")
//         const data = await response.json() //this will also takes time , therfore use await
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// promise6()

// use this above code in then & catch 

fetch("url").then((res) => {
    console.log(res);
    return res.json()
}).then((res2) => {
    console.log(res2)
}).catch((err) => console.log(err))