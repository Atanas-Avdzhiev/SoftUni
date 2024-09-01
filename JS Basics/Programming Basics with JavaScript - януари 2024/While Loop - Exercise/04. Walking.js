function steps(input) {

    let stepsNeededToReach = 10000;
    let index = 0;
    let stepsWalked = 0;

    while (index < input.length) {

        if (input[index] === "Going home") {

            stepsWalked += Number(input[index + 1]);

            if (stepsWalked < stepsNeededToReach) {
                console.log(`${stepsNeededToReach - stepsWalked} more steps to reach goal.`);
                return;
            };
        }
        else {
            stepsWalked += Number(input[index]);
        };

        if(stepsWalked >= stepsNeededToReach){
            console.log("Goal reached! Good job!");
            console.log(`${stepsWalked - stepsNeededToReach} steps over the goal!`);
            return;
        };

        index++;
    };

};
steps(["125", "250", "4000", "30", "2678", "4682"]);