function solve(x1, y1, x2, y2) {

    function valid(x1, y1, x2, y2) {
        return Number.isInteger(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));

    }

    let isValid1 = valid(x1, y1, 0, 0) ? 'valid' : 'invalid';
    let isValid2 = valid(x2, y2, 0, 0) ? 'valid' : 'invalid';
    let isValid3 = valid(x1, y1, x2, y2) ? 'valid' : 'invalid';

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid1}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid2}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid3}`);
}
solve(2, 1, 1, 1)