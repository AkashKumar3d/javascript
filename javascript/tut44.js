console.log("this is the throw try catch error tutorial 44");


let a = "akash ";
a=undefined;
// pretent this comming from  the server
if (a != undefined) {

    throw new Error("this is not defined");

} else {
    console.log("this is defined ");
}
try {

    console.log("we are inside the try block")
    functionakash();

} catch (error) {

    console.log(error)

}finally{
    console.log("this is the finally print the block of any condition")
}
