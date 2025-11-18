const prompt = require("prompt-sync")();

let random_number = Math.floor(Math.random() * 100);
// console.log(random_number);
let guess_number;
let i = 0;
while(true){
    i++;
    guess_number = prompt("Enter a number: ");
    if(random_number == guess_number){
        console.log(`Matched. CONGRATULATIONS! \nYou have take ${i} times`);
        break;
    }else{
        (random_number > guess_number) ? console.log(`Random number is bigger number than ${guess_number}`) : console.log(`Random number is smaller number than ${guess_number}`);
    }
}
