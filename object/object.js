let marks = {
    php: 23,
    c: 50,
}

for(let i=0; i<Object.keys(marks).length; i++){
    console.log(Object.keys(marks)[i] + " " + marks[Object.keys(marks)[i]]);
}

for(let key in marks){
    console.log(key);
    console.log(marks[key]);
}




