function validate() {
    const inputEl = document.querySelector('#email');
    const pattern = /^[a-z]+@[a-z]+.[a-z]+$/g;
    inputEl.addEventListener('change', () => {
        if (pattern.test(inputEl.value)) {
            inputEl.classList = 'none';
        }
        else {
            inputEl.classList = 'error';
        }
    })
}