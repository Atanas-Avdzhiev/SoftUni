function sumTable() {
    let tdElements = document.getElementsByTagName('td');
    let sum = 0;
    for (const tdEl of tdElements) {
        if (Number(tdEl.textContent)) {
            sum += Number(tdEl.textContent);
        }
    }
    let result = document.getElementById('sum');
    result.textContent = sum;
}