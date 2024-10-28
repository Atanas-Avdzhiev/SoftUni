function addItem() {
    const textInputEl = document.querySelector('#newItemText');
    const valueInputEl = document.querySelector('#newItemValue');
    const optionEl = document.createElement('option');
    optionEl.textContent = textInputEl.value;
    optionEl.setAttribute('value', valueInputEl.value);
    const selectEl = document.querySelector('#menu');
    selectEl.append(optionEl);
    textInputEl.value = '';
    valueInputEl.value = '';
}