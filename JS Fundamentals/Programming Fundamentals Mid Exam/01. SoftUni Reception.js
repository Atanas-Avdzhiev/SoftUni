function solve(array) {

    let answeredStudentsPerHour = Number(array[0]) + Number(array[1]) + Number(array[2]);
    let students = Number(array[3]);
    let answeredStudents = 0;
    let currentHour = 0;
    
    while (answeredStudents < students) {
        currentHour++;

        if (currentHour % 4 !== 0 && currentHour !== 0) {
            answeredStudents += answeredStudentsPerHour;
        }
    }
    console.log(`Time needed: ${currentHour}h.`);
}
solve(['5', '6', '4', '20'])
solve(['1', '2', '3', '45'])
solve(['3', '2', '5', '40'])