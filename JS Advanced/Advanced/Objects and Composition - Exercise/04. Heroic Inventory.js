function solve(input) {

    let res = [];

    for (const line of input) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        res.push({ name, level, items });
    }
    res.pop();
    let json = JSON.stringify(res);
    console.log(json);
}
solve(['Jake / 1000'])