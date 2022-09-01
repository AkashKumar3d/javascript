console.log("this is the shorthand tutorial 49");

let regax=/\wash/;//word character alphabets -_ and numbers
regax=/\w+_/;// \w means more than one or more character 
regax=/\W+bhai/; //\W means non word character
regax=/ number \d/; //\d means digit
regax=/ number \d+/; // \d+ means more than digit
regax=/\D9696/;  // non digit number
regax=/\D+9696/; // more than one non digit number 
regax=/\ska number/;//match white space character
regax=/\s+ka number/;//\s match white space  character
regax=/\Ska number/;//match non white space character
regax=/akash\b/;//word boundary

// assertion 
regax=/a(?=k)/;
regax=/s(?!h)/;

let str="akash ka number 969696 bhai";
let result = regax.exec(str);
console.log("the result is exec in regular expression  ", result);


if (regax.test(str)) { 
    console.log(`the string ${str} is match the ${regax.source} `);

} else {
    console.log(`the string ${str} is does not match the ${regax.source} `);
}