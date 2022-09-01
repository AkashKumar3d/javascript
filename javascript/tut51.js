console.log("this is the itreator tutorial 51");


// create the iterator 
function fruititreator(value) {
    let nextindex = 0;

    return {
        next: function () {
            if (nextindex < value.length) {

                return {

                    value: value[nextindex++],
                    done: false
                }

            }
            else {

                return {
                    done: true
                }

            }

        }
    }
}


let myarray = ['apple', 'orange', 'mango', 'banana'];
console.log("the my array is ", myarray);


// using the iterator 
let fruit = fruititreator(myarray);
console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);
// after all value is print the else done  is call 
console.log(fruit.next().value);