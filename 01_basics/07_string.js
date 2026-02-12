const name = "bibhash";
const num = 10;
//console.log(name + num );

console.log(`My name is ${name} and my num is ${num}`); //it is a place holder , dollar sign k andr jyada suitable lagta hai aur methods bhi use kr skte hai usme

const gameName = new String("bibhash");
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf("s"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newstring1 = "  bibhash  ";
console.log(newstring1);
console.log(newstring1.trim());

const url = "https://bibhash.com/bibhash%20abc"; //if space is present between the url the browser automatically puts %20 in the place of space

console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));//finds if search word is present in asked variable like here sundar is searched in url

console.log(gameName.split('-'));
