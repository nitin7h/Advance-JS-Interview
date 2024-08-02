// let arr = [5, 7, 8]

// let [a, b, c] = arr

// console.log(a, b, c);


// let [a, b] = [7, 8]
// console.log(a, b);


// object Destructing...
// let { a, b } = { a: 1, b: 5 }
// console.log(a, b);

// Array to object by Spread Operator

// let arr = [7, 8, 9, 4, 6]

// let obj = {...arr }
// console.log(obj);



// Obj to Arr
// let obj = { a: 1, b: 2, c: 4, d: 8 }

// let arr = [...obj]
// console.log(arr);


//for react use

let obj = {
    name: "Nitin",
    rollNo: 20132,
    course: "B.Tech",
    year: 4
}

let obj2 = {...obj, year: 5 }
console.log(obj2);


let obj1 = {
    name: "Nitin",
    class: 2,
    year: 5
}
let { name } = obj1
console.log(name);


// let { d, e } = { a: 1, b: 5 }
// console.log(d, e);