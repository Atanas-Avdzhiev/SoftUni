function tennis(input) {
    let numberOfTournaments = Number(input[0]);
    let startingPoints = Number (input[1]);
    let pointsAdded = 0;
    let win = 0;

    for(let i = 2; i < input.length; i++){
        
        if(input[i] === "W"){
            pointsAdded += 2000;
            win += 1;
        };

        if(input[i] === "F"){
            pointsAdded += 1200;
        };

        if(input[i] === "SF"){
            pointsAdded += 720;
        };

    };

    let finalPoints = startingPoints + pointsAdded;
    let pointsPerTournament = pointsAdded / numberOfTournaments;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(pointsPerTournament)}`);
    console.log(`${(win / numberOfTournaments * 100).toFixed(2)}%`);

};
tennis(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);