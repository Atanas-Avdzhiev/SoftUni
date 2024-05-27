function solve(input) {

    let command = input.shift();
    let cities = {};

    while (command !== 'Sail') {
        let [city, population, gold] = command.split('||');
        if (!cities.hasOwnProperty(city)) {
            cities[city] = {
                population: Number(population),
                gold: Number(gold),
            }
        }
        else {
            cities[city].population += Number(population);
            cities[city].gold += Number(gold);
        }
        command = input.shift();
    }
    command = input.shift();

    while (command !== 'End') {

        let commandArray = command.split('=>');
        let [firstCommand, ...cityInfo] = commandArray;

        switch (firstCommand) {
            case 'Plunder': {
                let [town, people, gold] = cityInfo;
                cities[town].population -= Number(people);
                cities[town].gold -= Number(gold);
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                if (cities[town].population <= 0 || cities[town].gold <= 0) {
                    console.log(`${town} has been wiped off the map!`);
                    delete cities[town];
                }
            }
                break;
            case 'Prosper': {
                let [town, gold] = cityInfo;
                if (Number(gold) >= 0) {
                    cities[town].gold += Number(gold);
                    console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
                }
                else {
                    console.log('Gold added cannot be a negative number!');
                }

            }
                break;
        }

        command = input.shift();
    }
    let numberOfCities = Object.keys(cities).length;
    if (numberOfCities > 0) {
        console.log(`Ahoy, Captain! There are ${numberOfCities} wealthy settlements to go to:`);
        for (const city in cities) {
            console.log(`${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`);
        }
    }
    else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}
solve(["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"])