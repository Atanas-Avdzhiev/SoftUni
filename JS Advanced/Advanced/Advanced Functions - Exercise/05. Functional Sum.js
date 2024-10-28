function add(num) {
    let sum = num;

    function add2(next) {
        sum += next;
        return add2;
    }

    add2.toString = function () {
        return sum;
    };
    return add2;
}
console.log(add(1));
console.log(add(1)(6)(-3));