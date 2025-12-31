function formatPerson([firstName, age]: [string, number]): string {
    return `Hello, my name is ${firstName} and my age is ${age}`;
}
console.log(formatPerson(['Pesho', 20]));