function extract(content) {
    let text = document.getElementById(content);
    let pattern = /\([\w ]+\)/g;
    let matches = text.textContent.matchAll(pattern);
    let array = [];
    for (const match of matches) {
        array.push(match[0]);
    }
    let result = [];
    for (const el of array) {
        let string = '';
        for (let i = 0; i < el.length; i++) {
            if (i !== 0 && i !== el.length - 1) {
                string += el[i];
            }
        }
        result.push(string);
    }
    return result.join('; ');
}