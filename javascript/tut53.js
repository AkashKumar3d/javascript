console.log("this is the generator tutorial 53");

// we have create the generator using the * 
function* numbersgen(){
      let i=0;


    //   yield keyword are use to generate the limited numeber in generator 
    //   yield 1;
    //   yield 2;
    //   yield 3;
    //   yield 4;
    //   yield 5;
    //   yield 6;

// using while loop in genetrator to generate the infinite numbers
      while (true) {
         yield (i++).toString();
      }

}

let  gen=numbersgen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
