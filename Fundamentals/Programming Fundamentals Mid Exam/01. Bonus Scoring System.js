function solve(array) {
    let students = Number(array.shift());
    let lectures = Number(array.shift());
    let additionalBonus = Number(array.shift());
    let highestBonus = 0;
    let highestStudent = 0;

    for (let i = 0; i < students; i++) {

        let currentStudent = Number(array[i]);
        let currentBonus = currentStudent / lectures * (5 + additionalBonus);

        if (currentBonus > highestBonus) {
            highestBonus = currentBonus;
            highestStudent = Number(array[i]);
        }

    }

    console.log(`Max Bonus: ${Math.ceil(highestBonus)}.`);
    console.log(`The student has attended ${highestStudent} lectures.`);
}
solve(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18'])