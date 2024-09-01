const say = () => {
    console.log("Say Hello :", this.name);
    return this.name

}

function tell() {
    console.log("Say Tell :", this);
    return this.name
}


const obj = {
    name: "John",
    say,
    tell
}


// console.log(obj.say());
console.log(obj.tell());
// console.log(obj.tell);