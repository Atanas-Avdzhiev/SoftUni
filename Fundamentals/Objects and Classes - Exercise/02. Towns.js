function solve(array) {

    for (cityInfo of array) {
        let splittedCityInfo = cityInfo.split(' | ');
        let city = splittedCityInfo[0];
        let latitude = Number(splittedCityInfo[1]);
        let longitude = Number(splittedCityInfo[2]);
        let object = {
            town: city,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        }
        console.log(object);
    }
}
solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])