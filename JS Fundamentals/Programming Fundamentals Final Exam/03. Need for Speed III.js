function solve(input) {

    const numberOfCars = Number(input.shift());
    let cars = {};

    for (let i = 0; i < numberOfCars; i++) {
        let line = input.shift();
        let [car, mileage, fuel] = line.split('|');
        cars[car] = [Number(mileage), Number(fuel)];
    }
    let command = input.shift();

    while (command !== 'Stop') {
        let commandArray = command.split(' : ');
        let commandName = commandArray[0];

        switch (commandName) {
            case 'Drive': {
                let car = commandArray[1];
                let distance = Number(commandArray[2]);
                let fuel = Number(commandArray[3]);
                if (cars[car][1] >= fuel) {
                    cars[car][0] += distance;
                    cars[car][1] -= fuel;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                }
                else {
                    console.log('Not enough fuel to make that ride');
                }
                if (cars[car][0] >= 100000) {
                    delete cars[car];
                    console.log(`Time to sell the ${car}!`);
                }
                break;
            }
            case 'Refuel': {
                let car = commandArray[1];
                let fuel = Number(commandArray[2]);
                let currentFuel = cars[car][1];
                cars[car][1] += fuel;
                if (cars[car][1] > 75) {
                    cars[car][1] = 75;
                    fuel = 75 - currentFuel;
                }
                console.log(`${car} refueled with ${fuel} liters`);
                break;
            }
            case 'Revert': {
                let car = commandArray[1];
                let kilometers = Number(commandArray[2]);
                cars[car][0] -= kilometers;
                if (cars[car][0] < 10000) {
                    cars[car][0] = 10000;
                }
                else {
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }
                break;
            }
        }
        command = input.shift();
    }
    for (const car in cars) {
        console.log(`${car} -> Mileage: ${cars[car][0]} kms, Fuel in the tank: ${cars[car][1]} lt.`);
    }
}
solve(['3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'])