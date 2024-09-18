function solve(input) {
    let res = {};

    for (let i = 0; i < input.length; i += 2) {
        res[input[i]] = Number(input[i + 1]);
    }
    console.log(res);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])