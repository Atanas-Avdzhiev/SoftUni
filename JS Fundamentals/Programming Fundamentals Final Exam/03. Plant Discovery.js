function solve(input) {

    let numberOfPlants = Number(input.shift());
    let plants = {};

    for (let i = 0; i < numberOfPlants; i++) {
        let [plantName, plantRarity] = input[i].split('<->');
        plants[plantName] = {
            rarity: Number(plantRarity),
            rating: [],
        }
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
                    plants[plantName].rating.push(rating);
                }
                else {
                    console.log('error');
                }
                break;
            case 'Update:':
                let newRarity = Number(arrayCommand[3]);
                if (plants.hasOwnProperty(plantName)) {
                    plants[plantName].rarity = newRarity;
                }
                else {
                    console.log('error');
                }
                break;
            case 'Reset:':
                if (plants.hasOwnProperty(plantName)) {
                    plants[plantName].rating = [];
                }
                else {
                    console.log('error');
                }
                break;
        }

        i++;
        command = input[i];
    }
    console.log(`Plants for the exhibition:`);

    for (const plant in plants) {
        let numberOfRatings = plants[plant].rating.length;
        let sum = 0;
        for (const rating of plants[plant].rating) {
            sum += rating;
        }
        let averageRating = sum / numberOfRatings;
        if (!averageRating) {
            averageRating = 0;
        }
        plants[plant].rating = averageRating;
    }

    let plantsEntries = Object.entries(plants);
    //plantsEntries.sort((a, b) => b[1].rarity - a[1].rarity || b[1].rating - a[1].rating);

    for (const plant of plantsEntries) {
        console.log(`- ${plant[0]}; Rarity: ${plant[1].rarity}; Rating: ${plant[1].rating.toFixed(2)}`);
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