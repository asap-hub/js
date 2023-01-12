//bodmas
//(2+1)*3
//(a+b)*c



const a = -1;
const b = 1;
const c = 3;

const formular = (a+b)*c;
var mo = formular % 2;
console.log(formular);
let x = 2 + 4 - 2 / 3 % 2;
if(x < 2){
    console.log("we are lesser than the values");
}
else if (formular === mo){
    console.log("we are equal to the values");
}
else {
    console.log("we are greater than the values");
}
console.log(x);
console.log(mo);