let arr2 = [2, 3, 5, 6, 8];

let arr3 = arr2.map(element => {
    return element;
})
console.log(arr3);

let temp = arr2.reduce((a1, a2) => {
    return a1 + a2;
});
console.log(temp);
