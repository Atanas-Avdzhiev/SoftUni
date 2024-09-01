function solve(array) {
    let newArray = [array[0]];

    for (let i = 1; i < array.length; i++) {

        if (Number(array[i]) < 0) {
            newArray.unshift(array[i]);
        }
        else {
            newArray.push(array[i]);
        }

    }
    for (let i = 0; i < newArray.length; i++) {
        console.log(newArray[i]);
    }
}
solve(['3', '-2', '0', '-1'])