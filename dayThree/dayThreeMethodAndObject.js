var myObject = {
    firstName: "Abdallah",
    secondName: "Mustapha",
    otherName: "Toure",
    country: "Ghana",
    courses: [],
    buyCourse : function (courseName){
        this.courses.push(courseName);
    },
    registeredCourses: function(){
        if(this.courses.length == 1)
        {
        return `FullName: ${this.firstName} ${this.secondName}  ${this.otherName} has registered ${this.courses.length} number of course`;
        } 
       else {
        return `FullName: ${this.firstName} ${this.secondName}  ${this.otherName} has registered ${this.courses.length} number of courses`;
       };
       
    }


};

 myObject.buyCourse("flutter");
 myObject.buyCourse("React native")
console.log(myObject.registeredCourses()); 
console.table(myObject);