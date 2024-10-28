class List {
    constructor() {
        this.numbers = [];
        this.size = 0;
    }
    add(element) {
        element = Number(element);
        this.numbers.push(element);
        this.size++;
        this.numbers.sort((a, b) => a - b);
        //return this.numbers;
    }
    remove(index) {
        index = Number(index);
        if (index >= 0 && index < this.numbers.length) {
            this.numbers.splice(index, 1);
            this.size--;
            this.numbers.sort((a, b) => a - b);
            //return this.numbers;
        }
    }
    get(index) {
        index = Number(index);
        if (index >= 0 && index < this.numbers.length) {
            return this.numbers[index];
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1); console.log(list.get(1));