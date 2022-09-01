/*
exercise 1:- you have create a variable  which is a string containig the text . which is the link you are intrested in.

you have fetch all the link from the given page which contain the text

*/



console.log("this is the exercise first");

let str="dseu";// ek variable create karenge jisake under jis string wale link ko fetch karna hai use store kareng
let links=document.links;//jish web page se link ko extract karna hai use ham fetch karenge 
// console.log(links);
let href;
// foreach loop laga ke us sare link ko extract karenge jisake under dseu string available ho
Array.from(links).forEach(function(element){
    href=element.href;
    if (href.includes(str)) {// if wali condition ye check karegi ki ham jis string ko fetch kar rahe hai usake under hamara string available hai ki nahi 
        console.log(href);
    }
})



// self practice same code
// let st="dseu";
// let link=document.links;
// console.log(links);
// let hrf;
// Array.from(link).forEach(function(element){
//     hrf=element.href;
//     if (hrf.includes(str)) {
//         console.log(hrf);
//     }
// })
