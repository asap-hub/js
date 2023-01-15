const Arr = ["Admin", "subAdmin", ["testPrep"],["user"]];
const input = Arr[5];

switch(input){
case Arr[0]:
    console.log("gets Full Access");
    break;

case Arr[1]:
    console.log("Get Access to create/Delete Course")
    break;

case Arr[2]:
    console.log("Get Acess to create/Delete Test");
    break;

case Arr[3]:
    console.log("Get Acess to take a test");
    break;

    default:
    console.log("Trial User");
    break;

}