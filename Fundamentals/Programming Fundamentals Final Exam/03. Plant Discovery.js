function solve(input) {

    let numberOfPlants = Number(input.shift());
    let plants = {};

    for (let i = 0; i < numberOfPlants; i++) {
        let [plantName, plantRarity] = input[i].split('<->');
        plants[plantName] = [plantRarity];
    }
    input.splice(0, numberOfPlants);
    let i = 0;
    let command = input[i];

    while (command !== 'Exhibition') {
        let arrayCommand = command.split(' ');
        let firstCommand = arrayCommand[0];
        let plantName = arrayCommand[1];

        switch (firstCommand) {
            case 'Rate:':
                let rating = Number(arrayCommand[3]);
                if (plants.hasOwnProperty(plantName)) {
                    plants[plantName].push(rating);
                }
                else {
                    console.log('error');
                }
                break;
            case 'Update:':
                let newRarity = arrayCommand[3];
                if (plants.hasOwnProperty(plantName)) {
                    plants[plantName][0] = newRarity;
                }
                else {
                    console.log('error');
                }
                break;
            case 'Reset:':
                if (plants.hasOwnProperty(plantName)) {
                    let currentRarity = plants[plantName][0];
                    plants[plantName] = [currentRarity];
                }
                else {
                    console.log('error');
                }
                break;
        }

        i++;
        command = input[i];
    }
    console.log('Plants for the exhibition:');

    for (const key in plants) {
        let rarity = Number(plants[key].shift());
        let sum = 0;
        for (const rating of plants[key]) {
            sum += rating;
        }
        let rating = sum / plants[key].length;
        if (plants[key].length === 0) {
            rating = 0;
        }
        console.log(`- ${key}; Rarity: ${rarity}; Rating: ${rating.toFixed(2)}`);
    }

}
solve(["3",

    "Arnoldii<->4",

    "Woodii<->7",

    "Welwitschia<->2",

    "Rate: Woodii - 10",

    "Rate: Welwitschia - 7",

    "Rate: Arnoldii - 3",

    "Rate: Woodii - 5",

    "Update: Woodii - 5",

    "Reset: Arnoldii",

    "Exhibition"])