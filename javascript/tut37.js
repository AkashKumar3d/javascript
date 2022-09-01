console.log("this is the callback function tutorial 37");


// 
let student = [
    { name: "akash", subject: "web development" },
    { name: "deepak ", subject: "java" },
    { name: "stendr", subject: "gp-rating" }

]

// callback function ka kaam ye  hota hai ki wo asynchronous wale data ke lkiye wait kare and job wo data fetch ho jaye jaye jo asyn wait mai tha tab excute kare
function enrollment(student, callback) {
    setTimeout(() => {
        student.puss(student);
        console.log("student are enrolled");
        callback();
    }, 3000);
}


function getstudent() {
    setTimeout(() => {
        let str = " ";
        student.forEach(function (student) {
            str += `<li> ${student.name} </li>`;
            console.log("student are fetch");
        });
        document.getElementById("student").innerHTML = str;
    }, 100);

}

// create the new object 
let newstudent = { name: "rohan", subject: "python" };
enrollment(newstudent, getstudent());
// getstudent();  