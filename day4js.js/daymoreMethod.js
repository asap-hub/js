var User = function(firstName, secondName){

this.firstName = firstName; this.secondName = secondName;

this.fullName = function(){
    console.log(`FullName: ${this.firstName} ${this.secondName}`);
                        }
}


User.prototype.getFirstName = function(){
    console.log(`I'm within the prototype: ${this.firstName}`);
}

var FullName = new User("Asap","dasty" );

// FullName.firstName = "Asap";
// FullName.secondName = "dasty"; 

 FullName.firstName;
 FullName.getFirstName();
 