const arr = [
    "Western North",
    "Western Region",
    "Ashanti region",
    "Greater Accra",
    ["Northern Region", "wa", "bolgatanga"],
    203,
  ];

  for(const ar of arr) console.log(ar);
  arr.forEach((e) => {
    console.table(e); 
  });

  var myObject = {
    firstName: "Abdallah",
    secondName: "Mustapha",
    otherName: "Toure",
    country: "Ghana",
    courses: {
    region:"Western North",
    region1:"Western Region",
    region2:"Ashanti region",
    region3:"Greater Accra",
    regionID: 203,}
  }
 // for(const obj in myObject) 
  //console.log(`obj key: ${obj} obj Value: ${myObject[obj]}`);
  //for(const objj in myObject["courses"]) console.log(`key: ${objj} value: ${myObject["courses"][objj]}`)

   