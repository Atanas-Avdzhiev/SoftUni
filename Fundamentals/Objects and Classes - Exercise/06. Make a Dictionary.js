function solve(array) {

    let storeArray = [];
    array.forEach(line => {
        let object = JSON.parse(line);
        let keys = Object.keys(object);
        let isKeyExist = false;

        if (storeArray.length === 0) {
            storeArray.push(object);
        }
        else {
            for (let obj of storeArray) {
                isKeyExist = obj.hasOwnProperty(keys[0]);
                if (isKeyExist) {
                    obj[keys[0]] = (object[keys[0]]);
                    break;
                }
            }

            if (isKeyExist === false) {
                storeArray.push(object);
            }
        }
    })

    storeArray.sort((a, b) => {
        let keyA = Object.keys(a)[0];
        let keyB = Object.keys(b)[0];
        return keyA.localeCompare(keyB);
    })

    storeArray.forEach(object => {
        console.log(`Term: ${Object.keys(object)} => Definition: ${Object.values(object)}`);
    })
}
solve(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Coffee":"AAA hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}'])