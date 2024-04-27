function solve(array) {

    let storeArray = [];

    array.forEach((el) => {
        let [name, level, items] = el.split(' / ');
        let object = {
            name: name,
            level: Number(level),
            items: items
        }
        storeArray.push(object);
    })
    
    storeArray.sort((a, b) => a.level - b.level);
    
    storeArray.forEach((el) => {
        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
    })
}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])