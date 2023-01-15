var isEmail = true;
var isGoogle = false;
var isHotmail = false;

if(isEmail || isGoogle || isHotmail){
    //console.log("We Are loggin");
}
else {
    //console.log("we are logout");
}

//ternary operator

//console.log( `result: ${enterValues}`);

class credential{
constructor(Email, Google, Hotmail){
    this.Email = Email, this.Google = Google, this.Hotmail = Hotmail
}
login(isEmail, isGoogle, isHotmail){

    isEmail ? console.log("we are loggin"): isGoogle ? console.log("we are loggin") :
    isHotmail ? console.log("we are loggin"): console.log("invalid detials");
}
}

const enterValues = new credential();
console.log(typeof enterValues.login(true,true,false))

 



