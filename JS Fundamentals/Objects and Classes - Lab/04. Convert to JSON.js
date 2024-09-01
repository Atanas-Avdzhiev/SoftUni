function solve(name, lastName, hairColor) {

    let object = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    let json = JSON.stringify(object);
    console.log(json);

}
solve('George', 'Jones', 'Brown')