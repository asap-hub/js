const item = [2,30,20,10]
let x = 0;
while(x < item.length){
    console.log(`item index: ${item[x]}`);
    console.log(x);
    x = x+1;
}
var y;
for(y of item)
{
    console.log(`we looping wosh!!!: ${y}`);
    
   
}
console.log(item.join(" ", y));
