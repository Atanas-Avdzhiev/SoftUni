function solve(array) {

    let energy = Number(array.shift());
    let i = 0;
    let command = array[i];
    let wonBattles = 0;

    while (command !== 'End of battle') {

        let distance = Number(array[i]);

        if (energy >= distance) {
            energy -= distance;
            wonBattles++;
        }
        else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            return;
        }

        if (wonBattles % 3 === 0) {
            energy += wonBattles;
        }

        i++;
        command = array[i];
    }
    console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
}
solve(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])