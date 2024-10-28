function solve(input) {

    let res = [];

    let [first, second, third] = input.shift().split(' | ')
    first = first.slice(2);
    third = third.slice(0, third.length - 2);

    for (const line of input) {
        let [town, lat, long] = line.split(' | ');
        town = town.slice(2);
        long = long.slice(0, long.length - 2);
        lat = Number(lat);
        long = Number(long);
        lat = parseFloat(lat.toFixed(2));
        long = parseFloat(long.toFixed(2));
        let obj = {
            [first]: town,
            [second]: lat,
            [third]: long
        }
        res.push(obj);
    }
    let json = JSON.stringify(res);
    return json;
}
solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])