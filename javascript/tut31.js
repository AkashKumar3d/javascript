console.log("this is the es6 class  tutorial 31");

// create aa class 

class employee {
    // create the constructor
    constructor(myname, myexperiance, mysallary, mydivision) {
        this.name = myname;
        this.experiance = myexperiance;
        this.mysallary = mysallary;
        this.division = mydivision;
    }
    //    create the few methods(
    slogan() {
        console.log(`my name is ${this.name} and the company is the best `);
    }

    joining() {
        return 2022 - this.myexperiance;

    }

    // we have create the static method 
    static add(a, b) {
        return a + b;
    }
}

// create the object of the parent class 

let emp1 = new employee("akash ", 10, 10000000, "lays");
console.log(emp1);
console.log(emp1.slogan());
console.log(emp1.joining());
console.log(employee.add(4, 6));


// create the programer class template and inherite the parent class 
class programer extends employee {
    // create the programmer class cconstructor 
    constructor(myname, myexperiance, mysallary, mydivision, mylanguage, mygithub) {

        // using super keword inharite the property of parent class constructor 
        super(myname, myexperiance, mysallary, mydivision);
        this.language = mylanguage;
        this.github = mygithub;
    }

    // create the some method for child class 
    favoritelanguage() {
        if (this.language == "python") {
            return "python";
        } else {
            return "javascript";
        }
    }

    static mul(x, y) {
        return x * y;
    }
}


// create the parent class object
let depak = new programer("depak", 45, 240000, "group", "python", "deepak@123");
console.log(depak);
console.log(depak.favoritelanguage());

console.log(programer.mul(4 , 5));