function exams(input) {

    let numberOfPoorGrades = Number(input[0]);
    let index = 2;
    let sum = 0;
    let numberOfExams = 0;
    let numberOfPoorGradesReached = 0;

    while (index < input.length) {

        let currentIndex = Number(input[index]);
        sum += currentIndex;
        numberOfExams += 1;

        if (Number(input[index]) <= 4) {
            numberOfPoorGradesReached += 1;
        };

        if (numberOfPoorGradesReached === numberOfPoorGrades){
            console.log(`You need a break, ${numberOfPoorGrades} poor grades.`)
            //break;
        };

        if (input[index + 1] === "Enough") {
            let avgScore = sum / numberOfExams;
            console.log(`Average score: ${avgScore.toFixed(2)}`);
            console.log(`Number of problems: ${numberOfExams}`);
            console.log(`Last problem: ${input[input.length - 3]}`);
            break;
        };

        index += 2;
    };

    // let avgScore = sum / numberOfExams;
    // index = 1;

    // while (index < input.length) {

    //     if (input[index] === "Enough") {

    //         console.log(`Average score: ${avgScore.toFixed(2)}`);
    //         console.log(`Number of problems: ${numberOfExams}`);
    //         console.log(`Last problem: ${input[index -2]}`);
    //     };

    //     index++;
    // };

};
exams(["4",

    "Stone Age",

    "5",

    "Freedom",

    "5",

    "Storage",

    "3",

    "Enough"]);