function solve(input) {
    let array = JSON.parse(input);

    if (array.length === 0) {
        console.log('<table></table>');
        return;
    }

    let html = '<table>\n';

    let keys = Object.keys(array[0]);
    let values = array.map((obj) => Object.values(obj));
    html += '    <tr>';
    for (let key of keys) {
        html += `<th>${key}</th>`;
    }
    html += '</tr>\n';

    for (let currentValue of values) {
        html += `    <tr>`;
        for (const value of currentValue) {
            html += `<td>${replace(value)}</td>`;
        }
        html += "</tr>\n";
    }

    html += '</table>';
    console.log(html);

    function replace(value) {
        return value
            .toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}
solve(`[{"Name":"Pesho",

"Score":4,

" Grade":8},
{"Name":"Gosho",

"Score":5,

" Grade":8},

{"Name":"Angel",

"Score":5.50,

" Grade":10}]`)