function focused() {
    const inputElements = document.querySelectorAll('input');

    for (const inputEl of inputElements) {
        inputEl.addEventListener('focus', (event) => {
            event.currentTarget.parentElement.classList = 'focused';
        })
    }
    for (const inputEl of inputElements) {
        inputEl.addEventListener('blur', (event) => {
            event.currentTarget.parentElement.classList = '';
        })
    }
}