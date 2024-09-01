const arr = [2, 3, 6, 8]

const total = arr.reduce((acc, curr) => {
    return acc + curr
}, 0)
console.log(total);