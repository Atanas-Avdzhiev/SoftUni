interface CountableSet<T> {
    add(item: T): void;
    remove(item: T): void;
    contains(item: T): boolean;
    getNumberOfCopies(item: T): number;
}

class CountedSet<T> implements CountableSet<T> {
    private counts: Map<T, number> = new Map<T, number>();

    add(item: T): void {
        this.counts.set(item, (this.counts.get(item) || 0) + 1);
    }

    remove(item: T): void {
        const count = this.counts.get(item);
        if (!count) return;

        if (count === 1) this.counts.delete(item);
        else this.counts.set(item, count - 1);
    }

    contains(item: T): boolean {
        return (this.counts.get(item) || 0) > 0;
    }

    getNumberOfCopies(item: T): number {
        return this.counts.get(item) || 0;
    }
}


let countedSet = new CountedSet<string>();
countedSet.add('test');
countedSet.add('test');
console.log(countedSet.contains('test'));
console.log(countedSet.getNumberOfCopies('test'));
countedSet.remove('test')
countedSet.remove('test')
countedSet.remove('test')
console.log(countedSet.getNumberOfCopies('test'));
console.log(countedSet.contains('test'));