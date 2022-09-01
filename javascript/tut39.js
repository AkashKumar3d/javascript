console.log("this is the promise tutorial 39");


let student = [
    { name: "akash", subject: "web development" },
    { name: "deepak ", subject: "java" },
    { name: "stendr", subject: "gp-rating" }

]


function enrollment(student) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            student.puss(student);
            console.log("student are enrolled");
           const error = true;

            if (!error) {

                resolve();

            } else {

                reject();

            }

        }, 3000);
    })

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
enrollment(newstudent).then(function () {
    getstudent;

}).catch(function () {
    console.log("the error is occur");

}); 
// getstudent();  