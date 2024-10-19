class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (typeof model !== 'string' || model === '' ||
            !Number.isInteger(storage) || storage < 0 ||
            typeof price !== 'number' || price < 0 ||
            typeof condition !== 'string' || condition === '') {
            throw new Error('Invalid smartphone!');
        }
        this.availableSmartphones.push({ model, storage, price, condition });
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {
        const findModel = this.availableSmartphones.find((smartphone) => smartphone.model === model);
        if (findModel === undefined) throw new Error(`${model} was not found!`);
        let soldPrice = findModel.price;
        let diff = desiredStorage - findModel.storage;
        if (findModel.storage >= desiredStorage) soldPrice = findModel.price;
        else if (diff <= 128) soldPrice *= 0.9;
        else if (diff > 128) soldPrice *= 0.8;
        let indexToRemove = this.availableSmartphones.indexOf(findModel);
        this.availableSmartphones.splice(indexToRemove, 1);
        let soldSmartphone = {
            model,
            storage: findModel.storage,
            soldPrice
        }
        this.soldSmartphones.push(soldSmartphone);
        this.revenue += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    upgradePhones() {
        if (this.availableSmartphones.length === 0) throw new Error('There are no available smartphones!');
        let result = 'Upgraded Smartphones:';
        this.availableSmartphones.forEach((smartphone) => {
            smartphone.storage *= 2;
            result += `\n${smartphone.model} / ${smartphone.storage} GB / ${smartphone.condition} condition / ${smartphone.price.toFixed(2)}$`;
        });
        return result;
    }

    salesJournal(criteria) {
        if (criteria !== 'storage' && criteria !== 'model') throw new Error('Invalid criteria!');
        let sortedSmartphones;
        if (criteria === 'storage') {
            sortedSmartphones = this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        }
        else if (criteria === 'model') {
            sortedSmartphones = this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
        }
        let result = `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`;
        result += `\n${sortedSmartphones.length} smartphones sold:`;

        sortedSmartphones.forEach((smartphone) => {
            result += `\n${smartphone.model} / ${smartphone.storage} GB / ${smartphone.soldPrice.toFixed(2)}$`;
        });
        return result;
    }
}
let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));