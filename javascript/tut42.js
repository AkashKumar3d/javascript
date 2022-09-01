console.log("this is the fetch api tutorial ");


let btn = document.getElementById('mybtn');
let content = document.getElementById('content');



// create the function

// function getdata() {
//     console.log("started getdata")
//     url="akash.txt";
//     fetch(url).then((response)=>{
//       console.log("inside first then");
//         return response.text();
//     }).then((data)=>{
//          console.log("inside second then");
//         console.log(data);
//     })
// }

function postdata() {
    console.log("started getdata")
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name": "aka555sh","salary": 1000,"age": 28}';
    param = {
        method: 'post',
        header: {
            'content-type': 'application.json'
        },
        body: data

    }

    fetch(url, param).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
}

console.log("befor running function getdata ");
postdata();
console.log("after running function getdata ");