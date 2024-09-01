function timeAndMinutes(input){
let hours = Number (input[0]);
let mins = Number (input[1]);
let totalMins = hours * 60 + mins + 15;
let newHour = Math.floor(totalMins / 60);
let newMins = totalMins % 60;

if(newHour === 24){
    newHour = 0;
};

if(newMins < 10){
console.log(`${newHour}:0${newMins}`);
}
else console.log(`${newHour}:${newMins}`);

};
timeAndMinutes(["23", "59"]);