function toggle() {
    hiddenDiv = document.getElementById('extra');
    button = document.querySelector('.button');

    if (button.textContent === 'More') {
        button.textContent = 'Less';
        hiddenDiv.style.display = 'block';
    }
    else if (button.textContent === 'Less') {
        button.textContent = 'More';
        hiddenDiv.style.display = 'none';
    }
}