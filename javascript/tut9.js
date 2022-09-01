console.log("this is the function tutorial 9");

let name = "akash kumar singh";
// simple way to create a function
function myobj(name) {
    console.log(`my name is ${name}`);

}
// decleare the function
myobj(name);

// function with create the variables
let func = function (name) {
    console.log(`my name is ${name}`);
    return 1;
}
let val = func(name);
console.log(val);


// decleare function in object

let myobj1 = {
    name: "akash kumar singh",
    passion: function () {
        return "free-fire";

    }
}
console.log(myobj1.passion());



