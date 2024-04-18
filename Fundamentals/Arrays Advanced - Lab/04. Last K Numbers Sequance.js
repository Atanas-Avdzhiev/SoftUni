function solve(num, key) {

    let array = [1];

    for (let i = 1; i < num; i++) {
        let index = Math.max(i - key, 0);
        let elements = array.slice(index, i);
        let sum = 0;

        for (let el of elements) {
            sum += el;
        }
        array.push(sum);
    }
    console.log(array.join(' '));
}
solve(8, 2)