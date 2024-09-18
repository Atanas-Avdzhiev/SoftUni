function solve(input) {

    input.sort((a, b) => a.localeCompare(b));
    let res = {};

    for (const line of input) {
        let [key, value] = line.split(' : ');
        let char = key[0];
        if (!res.hasOwnProperty(char)) {
            res[char] = {};
        }
        res[char][key] = value;
    }
    for (const char in res) {
        console.log(char)
        for (const product in res[char]) {
            console.log(`  ${product}: ${res[char][product]}`);
        }
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])