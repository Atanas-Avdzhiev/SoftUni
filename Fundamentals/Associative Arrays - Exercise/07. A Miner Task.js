function solve(array) {

    let resultObject = {};

    for (let i = 0; i < array.length; i += 2) {
        let item = array[i];
        let quantity = Number(array[i + 1]);
        if (!resultObject.hasOwnProperty(item)) {
            resultObject[item] = quantity;
        }
        else {
            resultObject[item] += quantity;
        }
    }

    for (const key in resultObject) {
        console.log(`${key} -> ${resultObject[key]}`);
    }
}
solve(['Gold', '155', 'Silver', '10', 'Copper', '17'])