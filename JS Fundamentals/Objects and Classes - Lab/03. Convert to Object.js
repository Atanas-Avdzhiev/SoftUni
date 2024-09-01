function solve(info) {

    let object = JSON.parse(info);

    for (let key of Object.keys(object)) {
        console.log(`${key}: ${object[key]}`);
    }

}
solve('{"name": "George", "age": 40, "town": "Sofia"}')