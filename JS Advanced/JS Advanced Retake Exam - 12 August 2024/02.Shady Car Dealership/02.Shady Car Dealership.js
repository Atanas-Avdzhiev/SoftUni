class ShadyCarDealership {
    constructor(dealerName) {
        this.dealerName = dealerName;
        this.availableCars = [];
        this.soldCars = [];
        this.revenue = 0;
    }

    addCar(model, year, mileage, price) {
        if (typeof model !== 'string' || model === '' ||
            typeof year !== 'number' || year < 1950 ||
            typeof mileage !== 'number' || mileage < 0 ||
            typeof price !== 'number' || price < 0) {
            throw new Error("Invalid car!");
        }
        else {
            const currentCar = {
                model,
                year,
                mileage,
                price
            }
            this.availableCars.push(currentCar);
            return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
        }
    }

    sellCar(model, desiredYear) {
        const modelFound = this.availableCars.find((car) => car.model === model);
        if (modelFound === undefined) {
            return `${model} was not found!`;
        }

        let soldPrice = 0;
        let diff = desiredYear - modelFound.year;
        if (modelFound.year >= desiredYear) {
            soldPrice = modelFound.price;
        }
        else if (diff <= 5) {
            soldPrice = modelFound.price * 0.9;
        }
        else if (diff > 5) {
            soldPrice = modelFound.price * 0.8;

        }
        let result = `${model} (${modelFound.year}) was sold for ${soldPrice.toFixed(2)}$`;
        const indexToRemove = this.availableCars.indexOf(modelFound);
        this.availableCars.splice(indexToRemove, 1);
        const soldCar = {
            model: modelFound.model,
            year: modelFound.year,
            mileage: modelFound.mileage,
            soldPrice
        }
        this.soldCars.push(soldCar);
        this.revenue += soldPrice;
        return result;

    }

    prepareCarForSale(model) {
        const modelFound = this.availableCars.find((car) => car.model === model);
        if (modelFound === undefined) return `${model} was not found for preparation!`;
        modelFound.mileage *= 0.5;
        modelFound.price *= 1.3;
        return `${model} (${modelFound.year}) is prepared for sale with ${modelFound.mileage} km. - ${modelFound.price.toFixed(2)}$`;

    }

    salesJournal(criteria) {
        let sortedSoldCars;
        if (criteria !== 'year' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }
        else if (criteria === 'year') {
            sortedSoldCars = this.soldCars.sort((a, b) => b.year - a.year);
        }
        else if (criteria === 'model') {
            sortedSoldCars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }
        let result = `${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`;
        result += `\n${sortedSoldCars.length} cars sold:`;

        sortedSoldCars.forEach((soldCar) => {
            result += `\n${soldCar.model} (${soldCar.year}) / ${soldCar.mileage} km. / ${soldCar.soldPrice.toFixed(2)}$`;
        })
        return result;
    }
}
const dealership = new ShadyCarDealership('Shady Motors');
console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
console.log(dealership.prepareCarForSale('Honda CR-V'));
console.log(dealership.prepareCarForSale('BMW X3'));
console.log(dealership.sellCar('Honda CR-V', 2012));
console.log(dealership.sellCar('BMW X3', 2012));
console.log(dealership.salesJournal('model'));