console.log("traversing in dom tutorial 15 ");

let element=document.querySelector('.container');
// element=element.childNodes;
element=element.children;
console.log(element);
element=element.parentNode;
console.log(element);

let sel=document.querySelector("div.content");
console.log(sel.lastElementChild);
console.log(sel.children[0].children[0].childNodes)
console.log(sel.firstChild)
console.log(sel.firstElementChild)
console.log(sel.lastChild)
console.log(sel.lastElementChild)
console.log(sel.childNodes)
console.log(sel.children)