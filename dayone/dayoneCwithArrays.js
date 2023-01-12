const a = [];
a.push(1);
a.pop(0);
a.push(1,2,3,4);
 
//console.log(a);

const arr = [1, '123',[23,09,90]]; 
//console.log(arr.length + ":the lenght");

//matrix
const matrix = [
                [1,2,3],
                [10,10,10], 
                [9,0,2]
                ];
console.log(matrix[0][0]);
console.log(matrix)
console.log(arr);


const b = Array.of(23,43,34,(55,34));
console.log(b);

const addArray = arr.concat(matrix);
console.log(addArray[2][2]);

const spreadArray = [...arr, ...matrix];
console.log(spreadArray[2][2]);

let number = 0;
for( var x = number; number < 5; number++){


var filMe = Array(10).fill(number);
console.log(filMe);
}