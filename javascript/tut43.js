console.log("this is the async/await a tutorial 43");


// create the async await function use and resolve the promises 

// async ek promise return karta hai
async function akash() {
    console.log("inside the funsction");

    // await bhi ek promise return karta hai es case mai hamane fetch api ke througth ham apana ham response karwa rahe hai github ke link se 
    const response= await fetch('https://api.github.com/users');
    console.log("before response");

    // second await jo ye bhi ek promise return kar raha hai
    const user= await response.json();
     console.log("user resolve ");
     return user;

}

console.log("before calling harry");
// hame function ko call kiya 
let a=akash();
console.log("after calling harry");
console.log(a);
a.then(data=> console.log(data));

console.log("last line of this file ");