let submitMe = document.querySelector(".button-me"); 


//get data
// let getfirstName = document.getElementById("#fn");
// let getsecondName = document.getElementById("#ln");
// let getage = document.getElementById("#ag");
 

 
    function sendData() {

        var firstName = document.getElementById('fName').value;
        var secondName = document.getElementById('lName').value;
        var age = document.getElementById('age').value;

        const car = {
            firstName :  firstName,
            secondName: secondName,
            age: age
        }
 
        
        var vehicle = [car];
    
        window.sessionStorage.setItem('vehicle', JSON.stringify(vehicle));
    
      
    }
  
   let btn = submitMe.addEventListener('click', () =>(sendData()));
 
    // window.onload = function(){
    //     document.getElementById('carForm').onsubmit = sendData;
        
    // }
 
