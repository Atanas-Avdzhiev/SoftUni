function evenSum(num1: number, num2: number, num3: number): boolean {
    return (num1 + num2 + num3) % 2 === 0;
}

console.log(evenSum(1, 2, 3));