function car(brand, model, func){
this.brand, this.model

this.func
 

}

const myCar =  new car("Toyota","Fiest");
const val = myCar.brand;
//console.log(val);

const cars = {
plateNo: "As 20 2023",
model : "Toyota pop 2",

  func : function myfunc(){

 console.log(`plate No: ${this.plateNo}, Model : ${this.model}`);

}

}
cars.func();