console.log("this is tutorial 5");

let p="i am  a boy and i am learning the javascript for web development";

// many function to apply in javascript
console.log(p.toLowerCase());
console.log(p.toUpperCase());
console.log(p.indexOf("am"));
console.log(p.lastIndexOf("i"));
console.log(p.length);
console.log(p.startsWith("i"));
console.log(p.endsWith("development"));
console.log(p.includes("learning"));
console.log(p.charAt(15));
console.log(p.indexOf("the"));
console.log(p.lastIndexOf("am"));
console.log(p.replace("am ", "have "));



let name="akash kumar singh ";
let standard="diploma";
let myhtml=`<h1>self introduction</h1>
<p>hello sir 
good moning sir my self ${name } and i am pusing ${standard} diploma 
from second years</p> `;
document.body.innerHTML=myhtml;// use to inject the any js code in main body in html
