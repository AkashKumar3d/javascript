console.log("this is tutotrial 20");

let myarr = ['cat', 'dog', 'monkey'];

// store the data in local storage 
localStorage.setItem("name", "akash");
localStorage.setItem("name1", "abhishek");
localStorage.setItem("animal", JSON.stringify(myarr));


// retrive the date in local storage
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("name1"));
console.log(JSON.parse(localStorage.getItem("animal")));

// cleare the  entire the local storage 
// localStorage.clear();


//remove a particular key value pair element
localStorage.removeItem("name");



// session storage 


// store the data in session storage 
sessionStorage.setItem("s name", "akash");
sessionStorage.setItem("s name1", "abhishek");
sessionStorage.setItem("s animal", JSON.stringify(myarr));


// retrive the date in session storage
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("name1"));
console.log(JSON.parse(localStorage.getItem("animal")));


// cleare the  entire the session  storage 
// localStorage.clear();


//remove a particular key value pair element in session storage 
localStorage.removeItem("name");
