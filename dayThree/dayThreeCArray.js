var arr = Array(1,3,5,7,9);


var index = arr.indexOf(parseInt("9"));
console.log(index);

var result = arr.every((e) => {
    return e%1 !==0;
})
console.log(result);