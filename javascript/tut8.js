console.log("this is for, while, do while , for each and for in loop tutorial eight");

let num=100;
let i=1;
let j=0;
// while loop
while (i<=num) {
    // console.log(i);
    i++;
}

// do while loop
do {
    console.log(j);
    j++;
} while (j<num);

// for loop 
for (let i = 0; i < num; i++) {
    console.log(i);
    
}

let arr=[2,4,6,8,10,1,12];
// for loo each use for itrate the array  
arr.forEach(function(element, index ,array ){
    console.log(element,index ,array);
});

// for in loop use for itrate the value of obj
const obj={
    name:"akash ",
    age:25,
    rollno: 404
}
for (const key in obj) {
  console.log(`${key} = ${obj[key]}`);
}