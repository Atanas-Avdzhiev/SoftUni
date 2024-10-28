function solve() {

    let array = [];
    class Person {

        firstName = '';
        lastName = '';
        age = '';
        email = '';

        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            const result = `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
            return result;
        }
    }

    const data1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    const data2 = new Person('SoftUni');
    const data3 = new Person('Stephan', 'Johnson', 25);
    const data4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    array.push(data1, data2, data3, data4);
    console.log(array.join(', '))
    return array;
}
solve()