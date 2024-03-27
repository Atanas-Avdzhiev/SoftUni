function onTime(input){
let examTimeHour = Number (input[0]);
let examTimeMinute = Number (input[1]);
let arrivalTimeHour = Number (input[2]);
let arrivalTimeMinute = Number (input[3]);

let examTimeHoursInMins = examTimeHour * 60;
let finalExamTimeInMins = examTimeHoursInMins + examTimeMinute; // 570

let arrivalTimeHoursInMins = arrivalTimeHour * 60;
let finalArrivalTimeInMins = arrivalTimeHoursInMins + arrivalTimeMinute; // 560

if((finalExamTimeInMins >= finalArrivalTimeInMins) && (finalExamTimeInMins <= finalArrivalTimeInMins + 30)){
    onTimeEarlyOrLate = ("On time");
};

if(finalExamTimeInMins > finalArrivalTimeInMins + 30){
    onTimeEarlyOrLate = ("Early");
};

if(finalExamTimeInMins < finalArrivalTimeInMins){
    onTimeEarlyOrLate = ("Late");
};

console.log(`${onTimeEarlyOrLate}`);

if((finalExamTimeInMins - finalArrivalTimeInMins) !== 0){
    
    if((finalExamTimeInMins > finalArrivalTimeInMins) && (finalExamTimeInMins - finalArrivalTimeInMins) <= 59){ // if you are earlier with less than 1h
        minutesEarlier = finalExamTimeInMins - finalArrivalTimeInMins;
        console.log(`${minutesEarlier} minutes before the start`)
    };

    if((finalExamTimeInMins > finalArrivalTimeInMins) && (finalExamTimeInMins - finalArrivalTimeInMins) >= 60){ // if you are earlier with 1h or more
       timeEarlierInMinutes = finalExamTimeInMins - finalArrivalTimeInMins;
       minutesEarlier = timeEarlierInMinutes % 60;
       hoursEarlier = timeEarlierInMinutes / 60;

       if(minutesEarlier < 10){
        console.log(`${Math.floor(hoursEarlier)}:0${minutesEarlier} hours before the start`);
       }
       else{
        console.log(`${Math.floor(hoursEarlier)}:${minutesEarlier} hours before the start`);
       };
    };

    if((finalExamTimeInMins < finalArrivalTimeInMins) && (finalArrivalTimeInMins - finalExamTimeInMins) <= 59){ // if you are late with less than 1h
        minutesLate = finalArrivalTimeInMins - finalExamTimeInMins;
        console.log(`${minutesLate} minutes after the start`);
    };

    if((finalExamTimeInMins < finalArrivalTimeInMins) && (finalArrivalTimeInMins - finalExamTimeInMins) >= 60){ // if you are late with 1h or more
        timeLaterInMinutes = finalArrivalTimeInMins - finalExamTimeInMins;
        minutesLater = timeLaterInMinutes % 60;
        hoursLater = timeLaterInMinutes / 60;
 
        if(minutesLater < 10){
         console.log(`${Math.floor(hoursLater)}:0${minutesLater} hours after the start`);
        }
        else{
         console.log(`${Math.floor(hoursLater)}:${minutesLater} hours after the start`);
        };
     };

};


};
onTime(["11", "30","12", "29"]);