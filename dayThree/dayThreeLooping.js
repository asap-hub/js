const arr = ["Western North","Western Region", "Ashanti region", "Greater Accra"];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for(let ar of arr){
    console.log(ar);
}

let x = 0;

do{
    console.log(arr);
    x++;
}
while(x < arr.length);

while(x < arr.length){
console.log(arr[x]);
x++;

}
 