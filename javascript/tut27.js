console.log("this is the object literal and constructor tuttorial 27");

// create the okbject literal 
let car={
name: "bmw" ,
speed: 120 ,
run: function () {
    console.log(`${name} is running`);
}
}
console.log(car);


// we have to creating the constructor

function mycar(carname,carspeed){
    this.name= carname,
    this.speed=carspeed,
    this.run=function () {
        console.log(`${this.name} is running verry fast`);
    }
    this.analyse=function(){
        console.log(`the car is slower   ${500- this.speed} km/h  then bugati `);
    }
}

// using constructor we have create  the may object of a single template
car1=new mycar("bmw", 120);
console.log(car1);
car2=new mycar("marsdes", 140);
console.log(car2);
car3=new mycar("aulto", 100);
console.log(car3);