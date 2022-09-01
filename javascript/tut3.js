/* datatypes in javascript 
there are  two types of datatypes 

1)primitive datatypes
*string
*numbers
*boolean 
*null
*undefined

2)refrence datatype 
*array
*object
*function
*/

// primitive datatype 
// string 
let name='akash ';
console.log("my name is akash "+ name);
console.log("the datatype is "+ (typeof name) );


// numbers 
let num=25;
console.log('the numeber is '+ 25);
console.log("the datatype is "+ (typeof num));

// boolean 
let isdrived=true;
console.log("the datatype is "+ (typeof isdrived));

// undefined 
let undef=undefined;
console.log('the datatype is '+ (typeof undef));

// null datatype 
let name2=null;
console.log('the datatype is '+ (typeof name2));




// refrence datatype 

// array
let arr=[20,30,40,50,60,70];
console.log(arr);
console.log("the datatype is "+ (typeof arr) );

// object datatype 
let myobj={
    stname : "akash",
    rollno : 404 ,
    subject : 'infomation_technology'
}
console.log(myobj);
console.log("the datatype is "+ (typeof myobj));

// function
function newfun() {
    
}
console.log("the datatype is "+ (typeof newfun));