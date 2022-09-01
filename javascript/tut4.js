console.log("this is the type conversion tutorial");

// convert number to string 
let num=25;
num=String(25);
console.log(num, (typeof num));

// convert bool to string 
let bool=true;
bool=String(true);
console.log(bool, (typeof bool));

// convert date to string date 
let date =new Date();
date =String(new Date);
console.log(date , (typeof date ));

// convert array num to string
let arr=String([1,2,3,4,5,6,7]);
console.log(arr, (typeof arr));

// convert string to num 
let str=Number('25');
console.log(str, (typeof str))

// convert bool to number
let bool1=Number(true);
console.log(bool1, (typeof bool1));


let date1=new Date();
console.log(date1 ,(typeof date1));

// array is not contvert in any form
let arr1=['1','2','3','4'];
arr1=Number(['1','2','3','4']);
console.log(arr1, (typeof arr));


// let number=parseInt(100.00);
let num1=parseFloat('100.00');
console.log(num1.toFixed(2), (typeof num1));//tofixed the decimal after digit


// type coersion= esake under do alag alag datatype mai arithmatic oeration perform karte hai
// let mystr="256";
let mystr=Number("256");
let mynum=256;
console.log(mystr + mynum);
