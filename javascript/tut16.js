console.log("creating removing replacing tutorial ");

// creating a nodes 
let element = document.createElement('li');
let text = document.createTextNode('i am a good boy');
element.appendChild(text);// add content and update the text


// set class name attribute and id etc
element.className = 'list';
element.id = 'mylist';
element.setAttribute('title', 'behaviour');
console.log(element);

// inject the create tag in dom
let list = document.querySelector(' ol.order-list');
list.appendChild(element);//append the created node in dom(document object model)
// console.log(list);
// console.log(element);


// replace element after create a new node
let elm=document.createElement('li');
let tnode=document.createTextNode('i am a bad boy');
elm.appendChild(tnode);
elm.className='list';
elm.id='rp';
element.replaceWith(elm);


// remove my element
let remove=document.getElementById('ol');// select parent node to remove childnode
remove.removeChild(document.getElementById('second'));//remove childnode 





//only  for practice
// let elemen=document.createElement('h1');
// let txt=document.createTextNode('this is the heading');
// elemen.append(txt);
// console.log(elemen);

// elemen.className='head';
// elemen.id='head1';
// // elemen.setAttribute(name,'test');

// let e1=document.querySelector('.order-list');
// e1.appendChild(elemen);
// console.log(e1)

