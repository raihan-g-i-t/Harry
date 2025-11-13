//1.
console.log("Rai\"".length);

//2.
let sentence = "c php python", word = "c php";

console.log(sentence.includes(word));

//3.
let userName = "Raihan";
console.log(userName.toLowerCase());

//4.
const price = "BDT 606";

console.log(price.match(/\d+/g).map(Number));

//5.
let string = "I am a good man";
console.log(string.replace(string[3], "M"));
