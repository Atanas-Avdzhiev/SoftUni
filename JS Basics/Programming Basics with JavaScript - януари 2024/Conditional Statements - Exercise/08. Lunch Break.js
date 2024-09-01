function timeForMovie(input){
let nameOfMovie = input[0];
let lengthOfMovie = Number (input[1]);
let lengthOfPause = Number (input[2]);
let lunchTime = 1/8 * lengthOfPause;
let breathTime = 1/4 * lengthOfPause;
let timeLeftForWatching = lengthOfPause - lunchTime - breathTime;
if(timeLeftForWatching >= lengthOfMovie){
    let leftMinutes = timeLeftForWatching - lengthOfMovie;
    console.log(`You have enough time to watch ${nameOfMovie} and left with ${Math.ceil(leftMinutes)} minutes free time.`);
}
else{
    let minutesNeeded = lengthOfMovie - timeLeftForWatching;
    console.log(`You don't have enough time to watch ${nameOfMovie}, you need ${Math.ceil(minutesNeeded)} more minutes.`);
};

};
timeForMovie(["Teen Wolf","48","60"]);