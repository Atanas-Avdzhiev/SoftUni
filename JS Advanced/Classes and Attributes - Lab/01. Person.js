class Person {
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
let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
let str = p.toString();
console.log(str)