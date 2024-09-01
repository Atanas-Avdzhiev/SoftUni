function solve(base, increment) {

    let base2 = base;
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let currentStep = 0;

    while (base2 >= 0.5) {

        currentStep += 1;

        if (base2 === 1 || base2 === 2) {
            gold = base2 * base2 * increment;
            break;
        }

        if (currentStep % 5 === 0) {
            let currentBase = base2 * base2;
            let currentStone = ((base2 - 2) * (base2 - 2)) * increment;
            let currentStoneWithoutIncrement = (base2 - 2) * (base2 - 2);
            let currentLapisLazuli = (currentBase - currentStoneWithoutIncrement) * increment;
            stone += currentStone;
            lapisLazuli += currentLapisLazuli;
            base2 -= 2;
            continue;
        }

        let currentBase = base2 * base2;
        let currentStone = ((base2 - 2) * (base2 - 2)) * increment;
        let currentStoneWithoutIncrement = (base2 - 2) * (base2 - 2);
        let currentMarble = (currentBase - currentStoneWithoutIncrement) * increment;
        stone += currentStone;
        marble += currentMarble;
        base2 -= 2;
    }
    let pyramidHeight = currentStep * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}
solve(12, 1)