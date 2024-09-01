function solve(yield) {

    let days = 0;
    let spice = 0;

    while (yield >= 100) {

        days++;
        spice += yield - 26;

        yield -= 10;
        if (yield < 100) {
            spice -= 26;
            if (spice < 26)
                spice = 0;
        }
    }
    console.log(days)
    console.log(spice)
}
solve(450)