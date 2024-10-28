function solve(array) {

    let carsObj = new Map();

    for (const line of array) {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);

        if (!carsObj.has(carBrand)) {
            carsObj.set(carBrand, new Map)
        }
        let searchedModel = carsObj.get(carBrand);
        if (searchedModel.has(carModel)) {
            searchedModel.set(carModel, searchedModel.get(carModel) + producedCars);
        }
        else {
            searchedModel.set(carModel, producedCars);
        }
    }

    for (const [carBrand, kvp] of carsObj) {
        console.log(`${carBrand}`);
        for (const [carModel, producedCars] of kvp) {
            console.log(`###${carModel} -> ${producedCars}`);
        }
    }
}
solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])

    //Alternative solution with normal object:

    // function solve(array) {

    //     let carsObj = {};
    
    //     for (const line of array) {
    //         let [carBrand, carModel, producedCars] = line.split(' | ');
    //         producedCars = Number(producedCars);
    
    //         if (!carsObj.hasOwnProperty(carBrand)) {
    //             carsObj[carBrand] = {};
    //         }
    //         let searchedModel = carsObj[carBrand];
    //         if (searchedModel.hasOwnProperty(carModel)) {
    //             searchedModel[carModel] += producedCars;
    //         }
    //         else {
    //             searchedModel[carModel] = producedCars;
    //         }
    //     }
    //     for (const car in carsObj) {
    //         console.log(`${car}`);
    //         for (const model in carsObj[car]) {
    //             console.log(`###${model} -> ${carsObj[car][model]}`);
    //         }
    //     }
    // }
    // solve(['Audi | Q7 | 1000',
    //     'Audi | Q6 | 100',
    //     'BMW | X5 | 1000',
    //     'BMW | X6 | 100',
    //     'Citroen | C4 | 123',
    //     'Volga | GAZ-24 | 1000000',
    //     'Lada | Niva | 1000000',
    //     'Lada | Jigula | 1000000',
    //     'Citroen | C4 | 22',
    //     'Citroen | C5 | 10'])



    //Alternative solution with class:

    // function solve(array) {

    //     class CarBrand {
    //         constructor(brandName) {
    //             this.brandName = brandName;
    //             this.models = {};
    //         }
    
    //         addModel(model, count) {
    //             if (this.models.hasOwnProperty(model)) {
    //                 this.models[model] += count;
    //             } else {
    //                 this.models[model] = count;
    //             }
    //         }
    
    //         printModels() {
    //             for (const model in this.models) {
    //                 console.log(`###${model} -> ${this.models[model]}`);
    //             }
    //         }
    //     }
    
    //     let carsMap = {};
    
    //     for (const line of array) {
    //         let [carBrand, carModel, producedCars] = line.split(' | ');
    //         producedCars = Number(producedCars);
    
    //         if (!carsMap.hasOwnProperty(carBrand)) {
    //             carsMap[carBrand] = new CarBrand(carBrand);
    //         }
    
    //         carsMap[carBrand].addModel(carModel, producedCars);
    //     }
    
    //     for (const carBrand in carsMap) {
    //         console.log(`${carBrand}`);
    //         carsMap[carBrand].printModels();
    //     }
    // }
    // solve(['Audi | Q7 | 1000',
    //     'Audi | Q6 | 100',
    //     'BMW | X5 | 1000',
    //     'BMW | X6 | 100',
    //     'Citroen | C4 | 123',
    //     'Volga | GAZ-24 | 1000000',
    //     'Lada | Niva | 1000000',
    //     'Lada | Jigula | 1000000',
    //     'Citroen | C4 | 22',
    //     'Citroen | C5 | 10']);