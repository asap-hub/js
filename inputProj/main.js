let submitMe = document.querySelector(".button-me"); 
let getData = document.querySelector("#get-button");


//get data
// let getfirstName = document.getElementById("#fn");
// let getsecondName = document.getElementById("#ln");
// let getage = document.getElementById("#ag");
 

  submitMe.addEventListener('click', () => (sendData()));

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

getData.addEventListener('click', () => (retrieveData()));
    function retrieveData(){

        console.log('retrieve data');

        var records = window.sessionStorage.getItem('car');
        var paragraph = document.createElement("p");
        var infor = document.createTextNode(records);
        paragraph.appendChild(infor);
        var element = document.getElementById("table");
        element.appendChild(paragraph);
    };
 
    
 
