function concatenateData(input){
let firstName=(input[0]);
let lastName=(input[1]);
let age=Number (input[2]);
let city=input[3];
console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`);


}
concatenateData(["Atanas","Avdzhiev",27,"Stara Zagora"]) //"You are <firstName> <lastName>, a <age>-years old person from <town>."