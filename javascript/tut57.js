console.log("this is map tutorial 57");

let mymap=new Map();

const key1="tostring", key2={} , key3=function (params) {};

// setting the map value 
mymap.set(key1, "this is the string ");
mymap.set(key2, "this is the object ");
mymap.set(key3, "this is the function");
console.log(mymap);


// getting the value for a Map 
let value1= mymap.get(key3);
console.log(value1);

// get the size of the map 
console.log(mymap.size);


// using for loop we have to get the key and value 
for (const [key , value ] of  mymap) {
    console.log(key , value);
    
}

// we have to only get the key of the value 
for (const key of mymap) {
    console.log(key);
}


// we have to only get the value of the mymap 
for (const value of mymap) {
    console.log(value);
    
}

// you can through get then value of for each loop
mymap.forEach((key, value ) => {
    console.log("this is the key ", key );
    console.log(("thi is the value", value));
});

// converting map to an array 
let myarray=Array.from(mymap);
console.log("map to array is ", myarray);

// converting map to an array 
let mykeysarray=Array.from(mymap.keys());
console.log("this is the key  array ", mykeysarray);

// converting map to an array 
let myvaluearray=Array.from(mymap.values());
console.log("this is the value array ", myvaluearray);