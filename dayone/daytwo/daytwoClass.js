class mySurname{
constructor(surname){
    this.surname = surname;
}
   sName(){
        return this.surname;

    }

} 


class myOtherName extends mySurname{
constructor(surname, othername){
    super(surname);
    this.othername = othername;
                }
 lName()
{ 
    return this.sName +" "+ this.othername; 
}

}

const myName = new myOtherName("Abdallah", "mustapha"); 

 console.log(myName);

 class thirdName extends myOtherName 
 {
    constructor(surname, othername, tName){
        super(surname,othername);
        this.tName = tName;
    }
    thName(){

        return this.lName + " "+ this.thName;
    }

 }

 const thName = new thirdName(surname = "Abdallah",othername = "Mustapha",tName =  "jnr");

 console.log(thName);
 
   