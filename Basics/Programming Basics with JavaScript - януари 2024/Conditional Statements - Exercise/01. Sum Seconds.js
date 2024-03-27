function sumSeconds(input){;
let firstPersonTime = Number (input[0]);
let secondPersonTime = Number (input[1]);
let thirdPersonTime = Number (input[2]);

let totalTime = firstPersonTime + secondPersonTime + thirdPersonTime;

let minutes = Math.floor(totalTime / 60);
let seconds = totalTime % 60;
if (seconds < 10){;
console.log(`${minutes}:0${seconds}`);
}
else{;
    (console.log (`${minutes}:${seconds}`));
};


};
sumSeconds(["14", "12", "10"]);