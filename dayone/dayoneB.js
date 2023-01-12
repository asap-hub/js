const a = true;
const Myname = 'Asap Dasty  ';

if(a === false){
console.log(`my name: ${Myname}`);

}
else if(a === true){
    console.log(`${Myname.trim().length < 11 ? Myname : "User Name lenght is more than 10"}`)
}
else {
    console.log('No Name will be assigned to the User.');
}