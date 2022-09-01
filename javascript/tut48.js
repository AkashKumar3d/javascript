console.log("this is the regular expression character set tutorial in js ");

let regax=/akash/;
regax=/a[a-z]ash/;// can be any character from a to z is match 
regax=/a[kty]ash/;//can be character from k, t, yis match 
regax=/a[^kty]ash/;//can not be any k, t, yis match 
regax=/a[^kty]as[sha]/;//can not be any k, t, y + can be s, h , a is match
regax=/a[a-zA-Z]as[sha0-9]/;// we can have many character set we  have to want 

// quantifires in javascript 
regax=/a{0-2}ash/;

let str="akash bhai";
let result = regax.exec(str);
console.log("the result is exec in regular expression  ", result);


if (regax.test(str)) {
    console.log(`the string ${str} is match the ${regax.source} `);

} else {
    console.log(`the string ${str} is does not match the ${regax.source} `);
}