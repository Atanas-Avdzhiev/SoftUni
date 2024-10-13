function validate() {
    const inputEl = document.querySelector('#email');
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;
    inputEl.addEventListener('change', () => {
        if (!pattern.test(inputEl.value)) {
            inputEl.classList = 'error';
        }
        else {
            inputEl.classList = '';
        }
    })
}