function solve(array) {

    let treasureChest = array.shift().split('|');
    let i = 0;
    let command = array[i];

    while (command !== 'Yohoho!') {

        let splittedCommand = command.split(' ');
        let firstCommand = splittedCommand[0];

        switch (firstCommand) {

            case 'Loot':

                for (let lootIndex = 1; lootIndex < splittedCommand.length; lootIndex++) {
                    let currentItem = splittedCommand[lootIndex];

                    if (!treasureChest.includes(currentItem)) {
                        treasureChest.unshift(currentItem);
                    }
                }
                break;

            case 'Drop':
                let dropIndex = Number(splittedCommand[1]);

                if (dropIndex >= 0 && dropIndex < treasureChest.length) {
                    let itemToMove = treasureChest[dropIndex];
                    treasureChest.splice(dropIndex, 1);
                    treasureChest.push(itemToMove);
                }
                break;

            case 'Steal':
                let count = Number(splittedCommand[1]);
                let countToRemove = Math.min(count, treasureChest.length);
                let removedItems = treasureChest.splice(treasureChest.length - countToRemove, countToRemove);
                console.log(removedItems.join(', '));
                break;

        }
        i++;
        command = array[i];
    }
    let numberOfItems = treasureChest.length;
    let lengths = treasureChest.map(item => item.length);
    let sumOfLengths = 0;

    for (let num of lengths) {
        sumOfLengths += num;
    }
    let averageTreasureGain = sumOfLengths / numberOfItems;

    if (treasureChest.length > 0) {
        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
    }
    else {
        console.log('Failed treasure hunt.');
    }
}
solve(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])