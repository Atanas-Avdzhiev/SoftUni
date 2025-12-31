function log(target: Object, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: string[]) {
        console.log(`Function '${key}' called with arguments: ${args.join(', ')}`);
        return original.apply(this, args);
    };
    return descriptor;
};

class Person {
    public fName: string;
    public lName: string;

    constructor(firstName: string, lastName: string) {
        this.fName = firstName;
        this.lName = lastName;
    }

    @log
    static getFullName(firstName: string, lastName: string): string {
        return `${firstName} + ${lastName}`;
    }
}

let person = new Person('John', 'Does');
Person.getFullName(person.fName, person.lName)
Person.getFullName('Benny', 'Tres');