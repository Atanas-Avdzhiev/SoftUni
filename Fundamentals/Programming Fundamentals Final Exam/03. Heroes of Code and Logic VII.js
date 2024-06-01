function solve(input) {

    let numberOfHeroes = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < numberOfHeroes; i++) {
        let [name, hp, mp] = input.shift().split(' ');

        heroes[name] = {
            hp: Number(hp),
            mp: Number(mp),
        }
    }
    let command = input.shift();

    while (command !== 'End') {

        let commandArray = command.split(' - ');
        let commandName = commandArray[0];

        switch (commandName) {
            case 'CastSpell': {
                let heroName = commandArray[1];
                let mpNeeded = Number(commandArray[2]);
                let spellName = commandArray[3];
                if (heroes[heroName].mp >= mpNeeded) {
                    heroes[heroName].mp -= mpNeeded;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`);
                }
                else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;
            }
            case 'TakeDamage': {
                let heroName = commandArray[1];
                let damage = Number(commandArray[2]);
                let attacker = commandArray[3];
                heroes[heroName].hp -= damage;
                if (heroes[heroName].hp > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
                }
                else {
                    delete heroes[heroName];
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }
                break;
            }
            case 'Recharge': {
                let heroName = commandArray[1];
                let amount = Number(commandArray[2]);
                let currentMP = heroes[heroName].mp;
                heroes[heroName].mp += amount;
                if (heroes[heroName].mp > 200) {
                    heroes[heroName].mp = 200;
                    amount = 200 - currentMP;
                }
                console.log(`${heroName} recharged for ${amount} MP!`);
                break;
            }
            case 'Heal': {
                let heroName = commandArray[1];
                let amount = Number(commandArray[2]);
                let currentHP = heroes[heroName].hp;
                heroes[heroName].hp += amount;
                if (heroes[heroName].hp > 100) {
                    heroes[heroName].hp = 100;
                    amount = 100 - currentHP;
                }
                console.log(`${heroName} healed for ${amount} HP!`);
                break;
            }
        }

        command = input.shift();
    }

    for (const hero in heroes) {
        console.log(`${hero}`);
        console.log(`  HP: ${heroes[hero].hp}`);
        console.log(`  MP: ${heroes[hero].mp}`);
    }
}
solve(["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"])