function solve() {

    const selectConvertToEl = document.querySelector('#selectMenuTo');
    const optionElHex = document.createElement('option');
    optionElHex.setAttribute('value', 'hexadecimal');
    optionElHex.textContent = 'Hexadecimal';

    const optionElBin = document.createElement('option');
    optionElBin.setAttribute('value', 'binary');
    optionElBin.textContent = 'Binary';

    selectConvertToEl.appendChild(optionElHex);
    selectConvertToEl.appendChild(optionElBin);
    const resultEl = document.querySelector('#result');

    document.querySelector('#container button').addEventListener('click', (e) => {
        const input = Number(document.querySelector('#input').value);
        if (selectConvertToEl.value === 'binary') {
            resultEl.value = input.toString(2);
        }
        else if (selectConvertToEl.value === 'hexadecimal') {
            resultEl.value = input.toString(16).toUpperCase();
        }
    })
}