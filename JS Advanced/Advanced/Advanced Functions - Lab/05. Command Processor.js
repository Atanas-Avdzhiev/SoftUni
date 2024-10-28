function solution() {
    let initialString = '';
    return {
        append: function (string) {
            initialString += string;
        },
        removeStart: function (x) {
            initialString = initialString.slice(x);
        },
        removeEnd: function (x) {
            initialString = initialString.slice(0, initialString.length - x);
        },
        print: function () {
            console.log(initialString);
        }
    }
}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();