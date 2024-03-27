function graduation(input) {
    let name = input[0];
    let index = 1;
    let sumOfGrades = 0;
    let numberOfExclude = 0;
    let currentGrade = Number(input[index]);

    while (currentGrade <= 12) {
        
        if (currentGrade < 4.00) {
            numberOfExclude ++;
        };

        if (numberOfExclude > 1) {
            console.log(`${name} has been excluded at ${index - 1} grade`);
            break;
        };

        sumOfGrades += currentGrade;

        index++;

        currentGrade = Number(input[index]);
    };

    let avgGrade = sumOfGrades / 12;
    
    if(numberOfExclude < 2){
    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    };

};
graduation(["Mimi", "5", "2", "3", "6", "5", "6"]);