function solve(array) {

    let resultObject = {};

    for (const line of array) {
        let [name, cards] = line.split(': ');
        let cardsArray = cards.split(', ');
        let uniqueCardsArray = cardsArray.filter((item, index) => cardsArray.indexOf(item) === index);

        if (!resultObject.hasOwnProperty(name)) {
            resultObject[name] = uniqueCardsArray;
        }
        else {
            let objectArray = resultObject[name].slice();
            let concatedArrays = objectArray.concat(uniqueCardsArray);
            let uniqueCardsConcatedArray = concatedArrays.filter((item, index) => concatedArrays.indexOf(item) === index);
            resultObject[name] = uniqueCardsConcatedArray;
        }
    }

    for (const key in resultObject) {
        let cardsArray = resultObject[key];
        let points = 0;

        for (const card of cardsArray) {
            let power = card[0];
            let type = card[1];
            let powerPoints = 0;
            let typePoints = 0;
            let totalPoints = 0;

            if (card.length === 2) {

                switch (power) {
                    case 'J': powerPoints = 11;
                        break;
                    case 'Q': powerPoints = 12;
                        break;
                    case 'K': powerPoints = 13;
                        break;
                    case 'A': powerPoints = 14;
                        break;
                }

                switch (type) {
                    case 'C': typePoints = 1;
                        break;
                    case 'D': typePoints = 2;
                        break;
                    case 'H': typePoints = 3;
                        break;
                    case 'S': typePoints = 4;
                        break;
                }

                if (powerPoints !== 0) {
                    totalPoints = powerPoints * typePoints;
                }
                else if (powerPoints === 0) {
                    powerPoints = Number(card[0]);
                    totalPoints = powerPoints * typePoints;
                }

            }
            else {
                powerPoints = 10;
                type = card[2];

                switch (type) {
                    case 'C': typePoints = 1;
                        break;
                    case 'D': typePoints = 2;
                        break;
                    case 'H': typePoints = 3;
                        break;
                    case 'S': typePoints = 4;
                        break;
                }

                totalPoints = powerPoints * typePoints;
            }
            points += totalPoints;
        }
        resultObject[key] = points;
    }

    for (const key in resultObject) {
        console.log(`${key}: ${resultObject[key]}`);
    }
}
solve(['John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'])