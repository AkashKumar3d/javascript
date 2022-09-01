console.log("this is the object prototype in javascript tutorial 28");

let obj = {
    name: "akash",
    class: 10,
    address: "govindpur"
}
console.log(obj);

// create the constructor and change the  protype
function obj1(givenname) {
    this.name = givenname;
}

//get the prototype with the help of constructor
obj1.prototype.getname = function () {
    return this.name;
}

// set the prototype
obj1.prototype.setname = function (name) {
    this.name = name;
}


let obj2 = new obj1("akash")
console.log(obj2);