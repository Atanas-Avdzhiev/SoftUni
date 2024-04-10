function signCheck(first, second, third) {
    let array = [first, second, third];
    let negative = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negative++;
        }
    }

    if (negative === 1 || negative === 3) {
        console.log('Negative')
    }
    else {
        console.log('Positive')
    }
}
signCheck(5, 12, -15)