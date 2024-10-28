function lockedProfile() {
    const buttonElements = document.querySelectorAll('button');
    for (const button of buttonElements) {
        button.addEventListener('click', function (event) {
            let currentHiddenItem = button.parentElement.querySelector('div');
            let isChecked = button.parentElement.querySelector('input[value=lock]');
            if (!isChecked.checked && button.textContent === 'Show more') {
                currentHiddenItem.style.display = 'block';
                button.textContent = 'Hide it';
            }
            else if (!isChecked.checked && button.textContent === 'Hide it') {
                currentHiddenItem.style.display = 'none';
                button.textContent = 'Show more';
            }
        })
    }
}