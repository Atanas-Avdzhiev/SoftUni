function solve(array) {

    let days = Number(array[0]);
    let dailyPlunder = Number(array[1]);
    let expectedPlunder = Number(array[2]);
    let add = dailyPlunder / 2;
    let plunder = 0;

    for (let i = 1; i <= days; i++) {

        if ((i % 3 !== 0) && (i % 5 !== 0)) {
            plunder += dailyPlunder;
        }

        if (i % 3 === 0 && i % 5 !== 0) {
            plunder += dailyPlunder + add;
        }

        if (i % 5 === 0 && i % 3 !== 0) {
            plunder += dailyPlunder;
            plunder *= 0.7;
        }

        if (i % 3 === 0 && i % 5 === 0) {
            plunder += dailyPlunder + add;
            plunder *= 0.7;
        }
    }

    if (plunder >= expectedPlunder) {
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
    }
    else {
        let percentageLeft = (plunder / expectedPlunder) * 100;
        console.log(`Collected only ${percentageLeft.toFixed(2)}% of the plunder.`);
    }
}
solve(["15", "40", "100"])