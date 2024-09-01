function hoursPerDayReading(input){;
let pages = Number (input[0]);
let pagesPerHour = Number (input[1]);
let days = Number (input[2]);
let hoursPerDayReading = (pages / pagesPerHour)/days;
console.log(hoursPerDayReading);

};
hoursPerDayReading(["212","20","2"]);