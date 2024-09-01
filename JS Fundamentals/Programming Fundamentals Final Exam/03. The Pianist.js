function solve(input) {

    let numberOfPieces = Number(input.shift());
    let pieces = {};

    for (let i = 0; i < numberOfPieces; i++) {
        let [piece, composer, key] = input.shift().split('|');
        pieces[piece] = [composer, key];
    }

    let command = input.shift();

    while (command !== 'Stop') {

        let commandArray = command.split('|');
        let firstCommand = commandArray[0];

        switch (firstCommand) {
            case 'Add': {
                let piece = commandArray[1];
                let composer = commandArray[2];
                let key = commandArray[3];
                if (!pieces.hasOwnProperty(piece)) {
                    pieces[piece] = [composer, key];
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }
                else {
                    console.log(`${piece} is already in the collection!`);
                }
                break;
            }
            case 'Remove': {
                let piece = commandArray[1];
                if (pieces.hasOwnProperty(piece)) {
                    delete pieces[piece];
                    console.log(`Successfully removed ${piece}!`);
                }
                else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            }
            case 'ChangeKey': {
                let piece = commandArray[1];
                let newKey = commandArray[2];
                if (pieces.hasOwnProperty(piece)) {
                    pieces[piece][1] = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                }
                else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            }
        }

        command = input.shift();
    }
    for (const piece in pieces) {
        console.log(`${piece} -> Composer: ${pieces[piece][0]}, Key: ${pieces[piece][1]}`);
    }
}
solve(['3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'])