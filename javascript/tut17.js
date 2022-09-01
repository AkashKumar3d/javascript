console.log("this is the event tutprial");
/*
list of add event listner

*/

document.getElementById("headings").addEventListener("mouseover",function(e){
    console.log("we have to click");

    let t;

    t=e.target;
    // console.log(t);
    
    t=e.target.id;
    // console.log(t);

    t=e.target.className;
    // console.log(t);

    t=Array.from(e.target.classList);
    // console.log(t);

    t=e.offsetX;
    // console.log(t);

    t=e.offsetY;
    // console.log(t);

    t=e.clientX;
    console.log(t);

    t=e.clientY;
    console.log(t);
})