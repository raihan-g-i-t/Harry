const prompt = require("prompt-sync")();
let correctNumber = 5;
let i;

while(i != correctNumber){
    console.log("try again");
    i = prompt("Enter a number: ");
}
console.log("Successful");