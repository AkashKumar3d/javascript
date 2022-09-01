console.log("ajax in one video tutorial");

let fetchbtn = document.getElementById("fetchbtn");
fetchbtn.addEventListener("click", buttonclickhandler);

function buttonclickhandler() {

    // initate the xhr object 
    let xhr = new XMLHttpRequest();


    // open the xhr object
    // xhr.open("get", 'akash.txt', true);
    xhr.open("POST", 'http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('content-type','application/json');


    // what to do on progresss (optional)
    xhr.onprogress = function () {
        console.log("on progress");
    }

    // what to do an responce is ready 
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.error("some thing is wrong")
        }

    }


    // send the request 
    params ='{"name":"test35ac545" , "sallary":"123" , "age": "25"}';
    xhr.send(params);

}

let popbtn=document.getElementById("popbtn");
popbtn.addEventListener("click", popbtnhandler);

function popbtnhandler() {

      // initate the xhr object 
      let xhr = new XMLHttpRequest();


      // open the xhr object
      xhr.open("get", 'http://dummy.restapiexample.com/api/v1/employees', true);
    //   xhr.getResponseHeader('content-type','application/json');
  
  
  
      // what to do an responce is ready 
      xhr.onload = function () {
          if (this.status === 200) {
              
            let obj= JSON.parse((this.responseText));
            console.log(obj);

            let list=document.getElementById("list");
            let str="";
            for ( key in obj) {
                str +=`<li> ${obj[key].employee_name} </li>`
            }
            list.innerHTML=str;

          } else {
              console.error("some thing is wrong")
          }
  
      }
  
//   send the request
      xhr.send();
    
}