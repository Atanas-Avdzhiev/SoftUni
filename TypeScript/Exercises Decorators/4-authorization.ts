class MockAuthorizationService {

    constructor(private userRole: 'Guest' | 'PersonalDataAdministrator' | 'Admin') { }

    canViewData(property: string) {
        switch (this.userRole) {
            case 'Admin': return true;
            case 'PersonalDataAdministrator': return ['name', 'age'].includes(property);
            default: return false;
        }
    }
}

let mockAuthorizationService = new MockAuthorizationService('PersonalDataAdministrator');

function authorize(service: MockAuthorizationService) {
    return function (target: Object, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.get;
        if (!original) return descriptor;

        descriptor.get = function () {
            if (!service.canViewData(key)) {
                throw new Error('You are not authorized to view this information');
            }
            return original.call(this);
        };

        return descriptor;
    };
}

class User {
    private _name: string;
    private _age: number;
    private _creditCardNumber: string;

    constructor(name: string, age: number, creditCardNumber: string) {
        this._name = name;
        this._age = age;
        this._creditCardNumber = creditCardNumber;
    }

    @authorize(mockAuthorizationService)
    get name(): string {
        return this._name;
    }

    @authorize(mockAuthorizationService)
    get age(): number {
        return this._age;
    }

    @authorize(mockAuthorizationService)
    get creditCardNumber(): string {
        return this._creditCardNumber;
    }
}

const user1 = new User("John Doe", 30, 'ABCD-1234');
console.log(user1.name);
console.log(user1.age);
console.log(user1.creditCardNumber);