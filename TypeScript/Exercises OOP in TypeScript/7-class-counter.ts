class Counter {
    private static count: number = 0;

    static increment(): void {
        this.count++;
    }

    static getCount(): number {
        return this.count;
    }
}

Counter.increment();
Counter.increment();
console.log(Counter.getCount());
//Counter.count = 10;