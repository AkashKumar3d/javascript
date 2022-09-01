console.log("this is tutorial date time tutorial  24");
// only new date  fuction show the current date and time 
let today = new Date;
console.log(today);

// we have create the static date and time 
let otherdate = new Date('05/15/2002 04:45:56');
otherdate = new Date('may 12 2003 03:56:45:48 ');
console.log(otherdate)

let a;

// show the date 
a = otherdate.getDate();
console.log(a);

// show the day 
a = otherdate.getDay();
console.log(a);

// show  the month
a = otherdate.getMonth();
console.log(a);

// show the  year 
a = otherdate.getFullYear();
console.log(a);

// show the hours 
a = otherdate.getHours();
console.log(a);

// show the getminutes
a = otherdate.getMinutes();
console.log(a);

// show the second 
a = otherdate.getSeconds();
console.log(a);

// show the milisecond
a = otherdate.getMilliseconds();
console.log(a);


// set date and time  method 

// set the date                   
otherdate.setDate(12);
console.log(otherdate);

// set the month
otherdate.setMonth(06);
console.log(otherdate);

// set the year 
otherdate.setFullYear(2022);
console.log(otherdate);

// set  the hour
otherdate.setHours(12);
console.log(otherdate);

// set the minute
otherdate.setMinutes(23);
console.log(otherdate);

// set the second
otherdate.setSeconds(45);
console.log(otherdate);