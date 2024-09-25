function addItem() {
    const inputTextEl = document.querySelector('#newItemText');
    const newLiElement = document.createElement('li');
    newLiElement.textContent = inputTextEl.value;
    const ulElement = document.querySelector('#items');
    ulElement.append(newLiElement);
    inputTextEl.value = '';
    inputTextEl.focus();
}