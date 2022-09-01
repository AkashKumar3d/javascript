console.log("this is the metaregular expression tutorial 47");

// create the regular expresion literalr
let regax = /akash/;

//looks into  the some  charcter symbol
regax = /^aka/; // means expression will match if string start with 
regax=/akash$/; // end of the string means "s"tring end  with ""
regax = /a.kash/;// match any one character;
regax=/a*kash/; // match any one or more character
regax=/ak?ash?/; // ? after charcter means that is optional
regax=/ak\*ash/; // exact match the star to use the backword slac
let str = "hello akash how are you and where are you going akash";


let result = regax.exec(str);
console.log("the result is exec in regular expression  ", result);


if (regax.test(str)) {
    console.log(`the string ${str} is match the ${regax.source} `);

} else {
    console.log(`the string ${str} is does not match the ${regax.source} `);
}