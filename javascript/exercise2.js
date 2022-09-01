console.log("this is the solution of exercise 2");


// create the new element
let divelm = document.createElement("div");

// add text into the create element
let val = localStorage.getItem("text");
let text;
if (text == null) {
    text = document.createTextNode("hello sir i am Editable text  ");
} else {
    text = document.createTextNode(val);
}
divelm.appendChild(text);


// set  creating new element  attribute like id class
divelm.setAttribute("id", "elem")
divelm.setAttribute("class", "elem")
divelm.setAttribute("style", "border: 2px solid black;  width: 100px; height:100px; margin:4px; padding:4px"
);


// grab the main container 
let container = document.querySelector(".container");
let myfirst = document.getElementById("myfirst");


// insert the element with id myfirst
container.insertBefore(divelm, myfirst);
console.log(container, divelm, myfirst);


// add event listner to the divelm element
divelm.addEventListener("click", function (params) {
    let notextarea = document.getElementsByClassName("textarea").length;

    if (notextarea == 0) {
        let html = elem.innerHTML;
        divelm.innerHTML = `<textarea> class="textarea form-control "  id="textarea1" row="3">${html} </textarea>`;
    }

    // add the blur event listner
    let textarea = document.getElementsById("textarea1").
        textarea.addEventListener('blur', function () {
            elem.innerHTML = textarea.value;
        })

});
