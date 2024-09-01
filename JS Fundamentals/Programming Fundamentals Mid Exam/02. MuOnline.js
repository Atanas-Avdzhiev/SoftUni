function solve(input) {

    let array = input.split('|');
    let health = 100;
    let bitcoins = 0;

    for (let i = 0; i < array.length; i++) {
        let currentCommand = array[i].split(' ');
        let firstCommand = currentCommand[0];
        let number = Number(currentCommand[1]);

        switch (firstCommand) {
            case 'potion':
                let healed = 0;

                if (health + number > 100) {
                    healed = 100 - health;
                    health = 100;
                }
                else {
                    healed = number;
                    health += number;
                }
                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;

            case 'chest':
                bitcoins += number;
                console.log(`You found ${number} bitcoins.`);
                break;

            default:
                let monster = firstCommand;
                let attack = number;
                health -= attack;
                if (health > 0) {
                    console.log(`You slayed ${monster}.`);
                }
                else {
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                }
        }
    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")