function addItem() {
    const itemListElement = document.getElementById('items');
    const newItemInput = document.getElementById('newItemText');
    const newLiElement = document.createElement('li');
    newLiElement.textContent = newItemInput.value;
    const deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = '[Delete]';

    deleteButton.addEventListener('click', (event) => {
        //newLiElement.remove();
        event.currentTarget.parentElement.remove();
    })
    newLiElement.append(deleteButton);
    itemListElement.append(newLiElement);
    newItemInput.value = '';
    newItemInput.focus();
}