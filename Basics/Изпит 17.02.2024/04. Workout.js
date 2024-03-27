function solve(input) {

    let days = Number(input[0]);
    let kmRunInFirstDay = Number(input[1]);
    let currentKm = Number(input[1]);
    let totalKm = 0;

    for (let index = 2; index < input.length; index++) {

        let a = Number(input[index]);
        let b = 1 + (a / 100);
        currentKm *= b;
        totalKm += currentKm;
    };
    totalKm += kmRunInFirstDay;

    if (totalKm >= 1000) {
        let moreKmRunned = totalKm - 1000;
        console.log(`You've done a great job running ${Math.ceil(moreKmRunned)} more kilometers!`);
    }
    else {
        let kmLeft = 1000 - totalKm;
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(kmLeft)} more kilometers`);
    };

};
solve(["4",
    "100",
    "30",
    "50",
    "60",
    "80"]);