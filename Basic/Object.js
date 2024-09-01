/*

method 1 => Singletone : when object make with constructure
method 2 => Object literals
method 3 => Factory function


*/



// Object literals 
let mysymbol = Symbol("Key1")
const userJS = {
    name: 'John',
    "full name": "Nitn Kumar",
    age: 30,
    userArray: [1, 2, 3, 4, 5],
    [mysymbol]: "MYSYMOBOL",
    address: 'USA',
    sayHello: function() {},
    isLoggin: true,

}



// console.log(userJS.name);
// console.log(userJS["name"]);
// console.log(userJS["address"]);
// console.log("****** :", userJS.userArray);
// console.log("****** :", userJS.userArray[4]);


// console.log(userJS["full name"]); // you can't use console.log(userJS."full name".);
// console.log(userJS[mysymbol]);
// console.log(typeof userJS[mysymbol]);
// console.log(userJS);



userJS.sayHello = function() {
    console.log("Get all property of this object :", this);
    console.log("Get single property of this object :", this.name);

}

console.log(userJS.sayHello());




// Singletone
const obj = new Object()
console.log("Object : ", obj);

obj.name = "Nitin Kumar"
obj.age = 23
obj.city = "Agra"
console.log("Object : ", obj);



//object destructuring

const deObj = {
    name: "Nitin Kumar",
    age: 23,
    city: "Agra",
}

const { name } = deObj
console.log(name);