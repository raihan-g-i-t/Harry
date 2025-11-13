let userName = "Raihan";

console.log("Raihan name length: " + userName.length);
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

console.log(userName.slice(2,6));
console.log(userName.replace("Rai", "Rey"));

let userName2 = "Raihan";
let temp = "";

for(let key in userName2){
    temp = temp.concat(userName2[key])
}
console.log(temp);

temp = "";

for(let i=0; i<userName2.length; i++){
    temp = temp.concat(userName[i]);
}
console.log(temp);