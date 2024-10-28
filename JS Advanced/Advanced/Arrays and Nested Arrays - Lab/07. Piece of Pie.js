function solve(array, start, end) {

    let startIndex = array.findIndex(x => x === start);
    let endIndex = array.findIndex(x => x === end);
    let slice = array.slice(startIndex, endIndex + 1);
    return slice;

}
solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie')