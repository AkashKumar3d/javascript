console.log("this is tutorial 6 in which study in array and object");

let name=["akash " , "rohan" , "mukesh ", "subham"];
let marks=[25,62,84,39,78,99,22];
let mixed=["it",25,"cs",30];

console.log(name);

console.log(mixed);

marks.shift();
marks.push(256);
marks.unshift(100);
marks.pop();
marks.reverse();
marks.splice(3,4);

let marks1=[25,26,26,47];
marks=marks.concat(marks1);
console.log(marks);

let myobj={
 name :"akash",
 class:"diploma second years ",
 rollno:404,
 submarks:[25,36,94,25]
}
console.log(myobj);
console.log(myobj.class);