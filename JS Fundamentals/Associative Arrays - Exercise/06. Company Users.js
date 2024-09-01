function solve(array) {

    let resultObject = {};

    array.forEach(line => {
        let [companyName, employeeId] = line.split(' -> ');

        if (!resultObject.hasOwnProperty(companyName)) {
            resultObject[companyName] = [employeeId];
        }
        else {
            if (!resultObject[companyName].includes(employeeId)) {
                resultObject[companyName].push(employeeId);
            }
        }
    })

    let entries = Object.entries(resultObject).sort((a, b) => a[0].localeCompare(b[0]));
    let objectFromEntries = Object.fromEntries(entries);

    for (const key in objectFromEntries) {
        console.log(`${key}`);

        for (const employeeId of objectFromEntries[key]) {
            console.log(`-- ${employeeId}`);
        }
    }
}
solve(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345'])