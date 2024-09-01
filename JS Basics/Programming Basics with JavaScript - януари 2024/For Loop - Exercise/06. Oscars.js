function oscars(input) {
    let actor = input[0];
    let startingPoints = Number(input[1]);
    let numberOfRaters = Number(input[2]);
    let pointsAdded = 0;
 
    for (let i = 3; i < input.length; i ++) {
 
        if(i % 2 !== 0){
        pointsAdded += input[i].length * Number(input[i + 1]) / 2;
        };
 
        if ((pointsAdded + startingPoints) > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${(pointsAdded + startingPoints).toFixed(1)}!`);
            return;
        };
 
    };
 
    if ((pointsAdded + startingPoints) <= 1250.5) {
        console.log(`Sorry, ${actor} you need ${(1250.5 - (pointsAdded + startingPoints)).toFixed(1)} more!`)
    };
    return;
 
};
oscars(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);