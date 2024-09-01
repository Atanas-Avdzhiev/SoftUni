function solve(array) {

    let object = {

    }

    for (let name of array) {
        object[name] = name.length;
    }

    for (const key in object) {
        console.log(`Name: ${key} -- Personal Number: ${object[key]}`);
    }
}
solve(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])