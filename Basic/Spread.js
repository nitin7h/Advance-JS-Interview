const array = [1, 2, 3, 4, 5]

console.log(array);
console.log(...array);


const array2 = [9, 8, 7]

const array3 = [array, array2]
console.log("array3 : ", array3);

const array4 = [...array, ...array2]
console.log("array4 : ", array4);