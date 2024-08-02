function fun() {
    let a = 5

    function fun2() {
        console.log(a);
    }

    return fun2
}


const fun3 = fun()
console.log(fun3);
console.log(fun3());