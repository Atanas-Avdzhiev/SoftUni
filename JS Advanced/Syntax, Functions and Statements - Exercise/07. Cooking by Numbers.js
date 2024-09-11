function solve(number, operation1, operation2, operation3, operation4, operation5) {

    number = Number(number);

    let array = [operation1, operation2, operation3, operation4, operation5];

    for (const operator of array) {
        switch (operator) {
            case 'chop': number /= 2;
                break;
            case 'dice': number = Math.sqrt(number);
                break;
            case 'spice': number++;
                break;
            case 'bake': number *= 3;
                break;
            case 'fillet': number -= number * 0.2;
                break;
        }
        console.log(number);
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')