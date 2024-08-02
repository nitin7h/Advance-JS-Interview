// function sum1(a, b) {
//     console.log(a + b);

// }

// function sum2(a, b, call) {
//     call(a, b)
// }

// sum2(1, 2, sum1)


// function hello() {
//     console.log("Hello");
// }

// setTimeout(hello, 3000)





const calculate = (a, b, call) => {
    call()
    return a + b

}

const kuchnhi = () => {
    console.log("Hi a'm CallBack");

}

const result = calculate(2, 5, kuchnhi)

console.log(result);