function solve(steps, stepInMeters, speed) {

    let distance = steps * stepInMeters;
    let speedInMinSec = speed / 3.6;
    let time = distance / speedInMinSec;
    let restCount = Math.floor(distance / 500);
    time += restCount * 60;
    let sec = Math.round(time % 60);
    let min = Math.floor(time / 60);
    let hour = Math.floor(time / 60 / 60);

    let secToPrint = sec < 10 ? `0${sec}` : `${sec}`;
    let minToPrint = min < 10 ? `0${min}` : `${min}`;
    let hourToPrint = hour < 10 ? `0${hour}` : `${hour}`;

    console.log(`${hourToPrint}:${minToPrint}:${secToPrint}`);
}
solve(4000, 0.60, 5)