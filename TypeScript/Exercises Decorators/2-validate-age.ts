function validate(target: Object, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.set;
    descriptor.set = function (val: number) {
        if (val < 1 || val > 200) {
            throw new Error('Age must be between 1 and 200');
        }
        return original?.call(this, val);
    };
    return descriptor;
};

class Age {
    private _age!: number;

    constructor(age: number) {
        this.age = age;
    }

    @validate
    set age(val: number) { this._age = val; }

    get age() { return this._age; }
}

let ageVal = new Age(10);
ageVal.age = -10;