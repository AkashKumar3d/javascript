console.log("this is the prototype inheritance tutorial 30");

// create  the  constructor 
function employee(name, sallary, experiance) {
    this.name = name;
    this.sallary = sallary;
    this.experiance = experiance;
}

// create the slogan 
employee.prototype.slogan = function () {
    console.log(`this comapany is the best regard ${this.name}`);
}


// create the object of the employee 
emp1 = new employee("akash", 200000, 54);
console.log(emp1);
console.log(emp1.slogan());



// apply  the inhertance 
// create the  second constructor 
function programmer(name, sallary, experiance, language) {

    employee.call(this, name, sallary, experiance); //   inherite the property of employee
    this.language = language;
}

// inherite the employee prototype 
programmer.prototype = Object.create(employee.prototype);

// manually set the constructor
programmer.prototype.constructor = programmer;



// create the object for programmer
let deepak = new programmer("depak", 250000, 23, "java");
console.log(deepak);
console.log(deepak.slogan());