function solve(array) {

    let pirateShip = array.shift().split('>').map(Number);
    let warShip = array.shift().split('>').map(Number);
    let maxHealth = Number(array.shift());
    let i = 0;
    let command = array[i];

    while (command !== 'Retire') {

        let splittedCommand = command.split(' ');
        let firstCommand = splittedCommand[0];

        switch (firstCommand) {
            case 'Fire':
                let fireIndex = Number(splittedCommand[1]);
                let fireDamage = Number(splittedCommand[2]);

                if (fireIndex >= 0 && fireIndex < warShip.length) {
                    warShip[fireIndex] -= fireDamage;

                    if (warShip[fireIndex] <= 0) {
                        console.log('You won! The enemy ship has sunken.');
                        return;
                    }
                }
                break;

            case 'Defend':
                let startIndex = Number(splittedCommand[1]);
                let endIndex = Number(splittedCommand[2]);
                let defendDamage = Number(splittedCommand[3]);

                if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {
                    for (let j = startIndex; j <= endIndex; j++) {
                        pirateShip[j] -= defendDamage;

                        if (pirateShip[j] <= 0) {
                            console.log('You lost! The pirate ship has sunken.');
                            return;
                        }
                    }
                }
                break;

            case 'Repair':
                let repairIndex = Number(splittedCommand[1]);
                let repairHealth = Number(splittedCommand[2]);

                if (repairIndex >= 0 && repairIndex < pirateShip.length) {
                    pirateShip[repairIndex] += repairHealth;
                    if (pirateShip[repairIndex] > maxHealth) {
                        pirateShip[repairIndex] = maxHealth;
                    }
                }
                break;

            case 'Status':
                let percentFromMaxHealth20 = maxHealth * 0.2;
                let itemsToRepair = pirateShip.filter(x => x < percentFromMaxHealth20);
                let countToRepair = itemsToRepair.length;
                console.log(`${countToRepair} sections need repair.`);
                break;
        }

        i++;
        command = array[i];
    }
    let pirateShipSum = 0;
    let warShipSum = 0;
    pirateShip.forEach(x => pirateShipSum += x);
    warShip.forEach(x => warShipSum += x);
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
}
solve(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"])