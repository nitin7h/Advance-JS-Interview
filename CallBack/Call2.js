// function getData(id) {
//     console.log("Your id is : ", id);
//     setTimeout(() => {
//         console.log("SetTimeOut id : ", id);
//     }, 3000)
// }

// getData(356)
// getData(245)
// getData(789)

function getData(id, call) {
    console.log("Your id is : ", id);
    setTimeout(() => {
        console.log("SetTimeOut id : ", id);
    }, 3000)

    call()
}


getData(356, () => {
    getData(2)
})