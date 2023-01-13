//all functions

let getdata = (x, y) =>{

    return `we are up to: ${x + y}`;
}

let myArray = function arrayValues(){

    return ['we are doing good', 20];
}


let param = (m, n) => {

    const total = m + n;
    return `I'm no passing No parameter: ${total}`;
} 

console.log(param(2, 3));


console.log(myArray());

function getData(){

    return `we are up to: ${2+3}`;
}
let values = getData();

console.log(getData());
console.log(getdata(10,2));
 

let arrowFunc = (x, y) => console.log(x+y);

console.log(arrowFunc(20,20));

let assig = arrowFunc = () => {
return ("arrow function without assignment");

}
console.log(assig());