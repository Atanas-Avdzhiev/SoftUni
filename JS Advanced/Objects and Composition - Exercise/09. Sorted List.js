function createSortedList() {

    return {
        list: [],
        add: function (el) {
            this.list.push(el);
            this.list.sort((a, b) => a - b);
            this.size = this.list.length;
        },
        remove: function (index) {
            if (index < 0 || index >= this.list.length) {
                return;
            }
            this.list.splice(index, 1);
            this.list.sort((a, b) => a - b);
            this.size = this.list.length;
        },
        get: function (index) {
            if (index < 0 || index >= this.list.length) {
                return;
            }
            this.list.sort((a, b) => a - b); // unn.
            return this.list[index];
        },
        size: 0
    }

}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));