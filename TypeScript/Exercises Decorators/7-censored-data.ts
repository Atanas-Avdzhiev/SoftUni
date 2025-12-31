class MockCensorService<T extends { [key: string]: any }> {

    constructor(private censoredProperties: string[]) { }

    censorProperties(items: T[]) {
        let censoredItems = items.slice();
        censoredItems.forEach(i => {
            this.censoredProperties.forEach(prop => { delete i[prop]; });
        });

        return censoredItems;
    }
}

let userCensorService = new MockCensorService<User>(['creditCardNumber'])
let employeeCensorService = new MockCensorService<Employee>(['birthday', 'salary'])

function getUsers<T extends { [key: string]: any }>(service: MockCensorService<T>) {
    const creationMap = new Map<T, number>();
    return function (target: Object, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const items: T[] = original.apply(this, args);

            const now = Date.now();

            items.forEach(item => {
                if (!creationMap.has(item)) {
                    creationMap.set(item, now);
                }
            });

            const fiveSecondsAgo = now - 5000;
            const recentItems = items.filter(item => {
                const createdAt = creationMap.get(item);
                return createdAt !== undefined && createdAt >= fiveSecondsAgo;
            });

            return service.censorProperties(recentItems);
        };

        return descriptor;
    };
}

function getEmployees<T extends { [key: string]: any }>(service: MockCensorService<T>) {

    const creationMap = new Map<T, number>();

    return function (target: Object, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log(`Method getEmployees called successfully`);

            const items: T[] = original.apply(this, args);
            const now = Date.now();

            items.forEach(item => {
                if (!creationMap.has(item)) {
                    creationMap.set(item, now);
                }
            });

            const tenSecondsAgo = now - 10000;
            const recentItems = items.filter(item => {
                const createdAt = creationMap.get(item);
                return createdAt !== undefined && createdAt >= tenSecondsAgo;
            });

            return service.censorProperties(recentItems);
        };

        return descriptor;
    };
}

class User {
    constructor(public name: string, public age: number, public creditCardNumber: string) { }

    getInfo() { return `${this.name}, Age: ${this.age} CreditCardNumber: ${this.creditCardNumber}`; }
}


class Employee {
    constructor(public name: string, public birthday: Date, public salary: number) { }

    getInfo() { return `${this.name}, Birthday: ${this.birthday?.toLocaleDateString()} Salary: ${this.salary}`; }
}


class UsersService {
    private _users: User[];
    private _employees: Employee[];

    constructor(users: User[], employees: Employee[]) {
        this._users = users; this._employees = employees;
    }

    addUser(user: User) { this._users.push(user); }

    addEmployee(employee: Employee) { this._employees.push(employee); }

    @getUsers(userCensorService)
    getUsers() { return this._users; }

    @getEmployees(employeeCensorService)
    getEmployees() { return this._employees; }
}

const user1 = new User('John Does', 30, 'ABCD-1234');
const user2 = new User('Benny Tres', 23, 'EFGH-5678');
const emp1 = new Employee('Sarah Connor', new Date(1964, 4, 15), 2500);
const emp2 = new Employee('Arnold Schwarzenegger', new Date(1947, 6, 30), 3500);
let usersService = new UsersService([user1, user2], [emp1, emp2]);
let users = usersService.getUsers(); console.log(users.map(x => x.getInfo()));
let employees = usersService.getEmployees(); console.log(employees.map(x => x.getInfo()));

//7 seconds later
setTimeout(() => { const user3 = new User('Jimmy Quatro', 27, 'IJKL-9012'); const emp3 = new Employee('Kyle Reese', new Date(2004, 0, 1), 2000); usersService.addUser(user3); usersService.addEmployee(emp3); let users = usersService.getUsers(); console.log(users.map(x => x.getInfo())); let employees = usersService.getEmployees(); console.log(employees.map(x => x.getInfo())); }, 7000)

//15 seconds later
setTimeout(() => { let users = usersService.getUsers(); console.log(users.map(x => x.getInfo())); let employees = usersService.getEmployees(); console.log(employees.map(x => x.getInfo())); }, 15000)