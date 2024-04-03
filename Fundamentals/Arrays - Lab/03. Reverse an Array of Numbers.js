function solve(number, array) {

    let newArray = [];

    for (let i = number - 1; i >= 0; i--) {
        newArray += array[i]
        if (i > 0) {
            newArray += " ";
        }
    }
    console.log(newArray)
}
solve(2, [66, 43, 75, 89, 47])