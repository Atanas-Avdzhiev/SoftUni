function minLength(minLength: number) {
    return function (target: Object, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.set;
        descriptor.set = function (newName: string) {
            if (newName.length < minLength) {
                throw new Error(`name must have a min length of ${minLength} characters`);
            }
            return original?.call(this, newName);
        };
        return descriptor;
    };
}

function ageRange(min: number, max: number) {
    return function (target: Object, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.set;
        descriptor.set = function (newAge: number) {
            if (newAge < min || newAge > max) {
                throw new Error(`age must be between ${min} and ${max}`);
            }
            return original?.call(this, newAge);
        };
        return descriptor;
    };
}

function matchesRegex(regex: RegExp) {
    return function (target: Object, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.set;
        descriptor.set = function (newPassword: string) {
            if (!newPassword.match(regex)) {
                throw new Error(`password needs to match ${regex}`);
            }
            return original?.call(this, newPassword);
        };
        return descriptor;
    };
}

class User {

    private _name!: string;
    private _age!: number;
    private _password!: string;

    constructor(name: string, age: number, password: string) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    @minLength(1)
    set name(val: string) { this._name = val; }

    @ageRange(1, 150)
    set age(val: number) { this._age = val; }

    @matchesRegex(/^[a-zA-Z0-9!@]+$/g)
    set password(val: string) { this._password = val; }

    get name() { return this._name; }
    get age() { return this._age; }
}

let user = new User('John', 130, 'hardPassword12');
let user2 = new User('John', 30, '!test');
let user3 = new User('John', 25, '@werty');
let user4 = new User('Jo', 20, 'password123');