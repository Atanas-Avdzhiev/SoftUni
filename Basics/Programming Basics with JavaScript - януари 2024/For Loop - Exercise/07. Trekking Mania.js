function trekking(input) {
    let numberOfGroups = Number(input[0]);
    let totalNumberOfPeople = 0;
    let peopleForMusala = 0;
    let peopleForMonblan = 0;
    let peopleForKilimandzharo = 0;
    let peopleForK2 = 0;
    let peopleForEverest = 0;

    for (let i = 1; i < input.length; i++) {

        totalNumberOfPeople += Number(input[i]);

        if (input[i] <= 5) {
            peopleForMusala += Number(input[i]);
        };

        if (input[i] >= 6 && input[i] <= 12) {
            peopleForMonblan += Number(input[i]);
        };

        if (input[i] >= 13 && input[i] <= 25) {
            peopleForKilimandzharo += Number(input[i]);
        };

        if (input[i] >= 26 && input[i] <= 40) {
            peopleForK2 += Number(input[i]);
        };

        if (input[i] >= 41) {
            peopleForEverest += Number(input[i]);
        };

    };

    console.log(`${(peopleForMusala / totalNumberOfPeople * 100).toFixed(2)}%`);
    console.log(`${(peopleForMonblan / totalNumberOfPeople * 100).toFixed(2)}%`);
    console.log(`${(peopleForKilimandzharo / totalNumberOfPeople * 100).toFixed(2)}%`);
    console.log(`${(peopleForK2 / totalNumberOfPeople * 100).toFixed(2)}%`);
    console.log(`${(peopleForEverest / totalNumberOfPeople * 100).toFixed(2)}%`);

};
trekking(["5", "25", "41", "31", "250", "6"]);