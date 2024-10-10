function createPerson(firstName, lastName) {

    return {
        firstName,
        lastName,
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        set fullName(value) {
            const parts = value.split(' ');
            if (parts.length === 2) {
                this.firstName = parts[0];
                this.lastName = parts[1];
            }
        }
    }
}
let person = createPerson("Albert", "Simpson");
console.log(person.fullName);//Albert Simpson
person.firstName = "Simon";
console.log(person.fullName);//Simon Simpson
person.fullName = "Peter";
console.log(person.firstName)// Simon
console.log(person.lastName)// Simpson