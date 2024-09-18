function solve(input) {

    let obj = {};

    for (const line of input) {
        let [city, population] = line.split(' <-> ');
        if (!obj.hasOwnProperty(city)) {
            obj[city] = 0;
        }
        obj[city] += Number(population);
    }
    for (const city in obj) {
        console.log(`${city} : ${obj[city]}`);
    }
}
solve(['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344',

    'Mexico City <-> 23401925',

    'Istanbul <-> 1000'])