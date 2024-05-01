function storage(array) {

    let storage = {};

    for (const line of array) {
        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (!storage[item]) {
            storage[item] = quantity;
        }
        else {
            storage[item] += quantity;
        }
    }

    for (const key in storage) {
        console.log(`${key} -> ${storage[key]}`);
    }
}
storage(['tomatoes 10',

    'coffee 5',

    'olives 100',

    'coffee 40'])