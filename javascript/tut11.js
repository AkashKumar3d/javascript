console.log("this is understanding dom tutorial");
let a=document;
a=document.all;// show all attribute of document
a=document.forms[0];

// itrate using foreach loop and create aelement array with the help of from(a)
Array.from(a).forEach(function(element) {
    console.log(element);
});
