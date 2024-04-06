function solve(input) {

    let array = [];
    let string = input[0];
    let currentIndex = 0;

    for (let i = 0; i < string.length; i++) {
        let currentString = '';
        while ((string[i] !== '|' && string[i] !== ' ') && i !== string.length) {
            currentString += string[i];
            i++;
        }
        array[currentIndex] = currentString;
        currentIndex += 1;
    }

    let health = 100;
    let coins = 0;
    let currentRoom = 0;

    for (let i = 0; i < array.length; i += 2) {
        currentRoom += 1;
        if (array[i] === 'potion') {
            let currentHealth = health;
            health += Number(array[i + 1]);
            if (health > 100) {
                health = 100;
            }
            console.log(`You healed for ${health - currentHealth} hp.`); // might need to calculate the heal
            console.log(`Current health: ${health} hp.`);
        }
        else if (array[i] === 'chest') {
            coins += Number(array[i + 1]);
            console.log(`You found ${array[i + 1]} coins.`);
        }
        else {
            let monsterName = array[i];
            health -= array[i + 1];
            if (health > 0) {
                console.log(`You slayed ${monsterName}.`);
            }
            else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${currentRoom}`);
                break;
            }
        }

    }
    if (health > 0) {
        console.log("You've made it!")
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }

}
solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])