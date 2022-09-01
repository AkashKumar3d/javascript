console.log("this is the more add event listner");

/*
Mouse Events: click, dblclick, mousedown, mouseup, contextmenu, mouseout, mousemove, mousewheel, mouseover
Touch Events: touchstart, touchend, touchmove, touchcancel
Keyboard Events: keydown, keyup, keypress
Form Events: focus, blur, change, submit
Window Events: resize, scroll, load, unload, hashchange
*/

// let btn=document.getElementById("btn");
// btn.addEventListener("click" , func1);
// btn.addEventListener("dblclick", func2);
// btn.addEventListener("mousedown", func3);



function func1(e) {
    console.log("you have to click");
    console.log(e);
    e.preventDefault;
}

function func2(e) {
    console.log("you have to click double", e);
    e.preventDefault;
}


function func3(e) {
    console.log("you have to mouse down", e);
    e.preventDefault;
}

document.getElementById("main-container").addEventListener("mouseenter", function (e) {
    console.log("you have to trigger the mouse enter", e)

})

document.getElementById("main-container").addEventListener("mouseleave", function (e) {
    console.log("you have to trigger the mouseleave", e)

})


document.getElementById("main-container").addEventListener("mousemove", function (e) {
    console.log("you have to trigger mouse move event ", e)

    // javascript se bacground mai dynamically color add kar sakate hai
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},49)`;


})
