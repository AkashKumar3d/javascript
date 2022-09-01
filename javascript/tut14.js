console.log("this is tutorial 14");

/*
there are two types of selector
1)single selector
2)multiple selector

*/


//single selector
let element = document.getElementById("box1");
element.style.color = 'green';
// console.log(element);
element.innerText = "i am a web developer";
element.innerHTML = "<b>i am a web developer</b>";
element = element.parentNode;
element = element.childNodes;
element = element.className;
// console.log(element);

// let elm = document.querySelector('#box2');
elm = document.querySelector('h1');
 elm.style.color = 'green';
elm = elm.parentNode;
elm = elm.childNodes;
elm=elm.className;
console.log(elm);



// multiple line selector
let elem=document.getElementsByClassName("box");
 console.log(elem[2]);

//  itrate the same classname 
 Array.from(elem).forEach(function(element){
     element.style.color='red';
     console.log(element)
 })






