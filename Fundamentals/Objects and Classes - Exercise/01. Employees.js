function solve(array) {

    for (let name of array) {
        let currentLength = name.length;
        let object = {

        }
        object.employeeName = name;
        object.personalNum = currentLength;
        console.log(`Name: ${object.employeeName} -- Personal Number: ${object.personalNum}`);
    }

}
solve(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])