//1. Рекордът в секунди – реално число в интервала [0.00 … 100000.00]

//2. Разстоянието в метри – реално число в интервала [0.00 … 100000.00]

//3. Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]

function willIvanBeatTheWorldRecord(input){
let worldRecordInSeconds = Number (input[0]);
let distanceInMeters = Number (input[1]);
let timeInSecondsFor1MeeterSwimming = Number (input[2]);
let waterResistanceSlowDownInSeconds = (Math.floor(distanceInMeters / 15) * 12.5);
let timeNeededToSwim = timeInSecondsFor1MeeterSwimming * distanceInMeters;
let totalTimeNeededToSwim = timeNeededToSwim + waterResistanceSlowDownInSeconds;

if(totalTimeNeededToSwim < worldRecordInSeconds){
    console.log(`Yes, he succeeded! The new world record is ${totalTimeNeededToSwim.toFixed(2)} seconds.`);
}
else{
    let secondsLeftToBeatTheRecord = totalTimeNeededToSwim - worldRecordInSeconds;
    console.log(`No, he failed! He was ${secondsLeftToBeatTheRecord.toFixed(2)} seconds slower.`);
};


};
willIvanBeatTheWorldRecord(["55555.67","3017","5.03"]);