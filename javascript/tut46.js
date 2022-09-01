console.log("this is the regular expression tutorial 46");

let reg = /akash/;// this is the regular expression literals in java 
reg = /akash/g;//g means global
// reg = /akaSh/i;// i means case sensitive

console.log(reg);
console.log(reg.source);


let s = "hello i am akash kumar singh .and akash is 22 years old ";

// functiont to match expression 

// 1 exec(): this function will return in an array for match or null return for no match 

let result = reg.exec(s);
console.log(result);
// // for global search
//  result=reg.exec(s);
// console.log(result);

// // for case sensitive
// result=reg.exec(s);
// console.log(result);

if (result) {
    console.log(result);
    console.log(result.input);
    console.log(result.index);
}

// test() function return  the or false 

let result2=reg.test(s);
console.log(result2) // this will print true becouse if reg is match the test function return true 

// match() function will be return array of result or null 
// let result3=s.match(reg); --> this is the wrong
let result3=s.match(reg); //--> this is the right 
console.log(result3);


 // search() function return index of first match of else -1
// let result3=s.search(reg); --> this is the wrong
let result4=s.search(reg); //--> this is the right 
console.log(result4);

// replace() return new replace  string with all the replacement (if no flag is given , first match will be given )

let result5=s.replace(reg, 'deepak' );
console.log(result5);
