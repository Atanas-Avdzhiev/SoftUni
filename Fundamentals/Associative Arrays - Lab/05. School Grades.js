function schoolGrades(array) {

    let grades = {};

    for (const line of array) {
        let splittedLine = line.split(' ');
        let name = splittedLine.shift();
        let sum = 0;

        for (const grades of splittedLine) {
            sum += Number(grades);
        }

        let arrayGradesNumber = [sum, splittedLine.length];

        if (grades[name]) {
            let sumOfGrades = grades[name][0] + sum;
            let numberOfGrades = grades[name][1] + splittedLine.length;
            delete grades[name];
            grades[name] = [sumOfGrades, numberOfGrades];
        }
        else {
            grades[name] = arrayGradesNumber;
        }
    }

    let entries = Object.entries(grades);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const student of entries) {
        let averageGrade = student[1][0] / student[1][1];
        console.log(`${student[0]}: ${averageGrade.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6'])