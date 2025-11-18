//1.
let arr = [2, 3, 4];

let a = 5.8;
a = parseInt(a);
arr.push(a);

console.log(arr);

//3.
let arr2 = [3, 10, 12, 20, 30, 55];

arr2.forEach(element => {
    if(element%10===0){
        console.log(element);
    }
});

let temp = arr2.filter(element => {
    return element%10===0;
});
console.log(temp);

//5
let red = [1, 2, 3, 4, 5];

let factorial = red.reduce((r1, r2) => {
    return r1 * r2;
})
console.log(factorial);