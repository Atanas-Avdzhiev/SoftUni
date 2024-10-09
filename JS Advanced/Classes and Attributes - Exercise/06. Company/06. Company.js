class Company {

    //departments = {};

    constructor() {
        this.departments = {}
    }

    addEmployee(name, salary, position, department) {
        //salary = Number(salary);
        if (name === null || name === undefined || name === ''
            || salary === null || salary === undefined || salary === ''
            || position === null || position === undefined || position === ''
            || department === null || department === undefined || department === '') {
            throw new Error('Invalid input!');
        }
        else if (salary < 0) {
            throw new Error('Invalid input!');
        }
        else if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = {};
        }
        this.departments[department][name] = { salary, position };
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let result = '';
        let highestAverageSalary = 0;
        let departmentWithHighestAverageSalary;

        for (const department in this.departments) {
            let count = 0;
            let sum = 0;
            let currentAverageSalary = 0;
            for (const employee in this.departments[department]) {
                count++;
                sum += this.departments[department][employee].salary;
            }
            currentAverageSalary = sum / count;
            if (currentAverageSalary > highestAverageSalary) {
                highestAverageSalary = currentAverageSalary;
                departmentWithHighestAverageSalary = department;
            }
        }
        result += `Best Department is: ${departmentWithHighestAverageSalary}`;
        result += `\nAverage salary: ${highestAverageSalary.toFixed(2)}`;

        let entries = Object.entries(this.departments[departmentWithHighestAverageSalary]);
        let sortedEntries = entries.sort((a, b) => b[1].salary - a[1].salary || a[0].localeCompare(b[0]));

        for (const employee of sortedEntries) {
            result += `\n${employee[0]} ${employee[1].salary} ${employee[1].position}`;
        }
        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());