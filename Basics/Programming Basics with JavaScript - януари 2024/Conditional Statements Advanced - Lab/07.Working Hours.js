function shopWorkingTime(input){
let hour = Number (input[0]);
let day = input[1];

if(hour >= 10 && hour <= 18 && day !== "Sunday"){
    switch(day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday": console.log("open");break
    };
}
else{
    console.log("closed");
};


};
shopWorkingTime(["11","Saturday"]);