function deleteByEmail() {
    const inputEl = document.querySelector('input[name="email"]');
    const tdElements = document.querySelectorAll('td:nth-child(even)');
    const resultEl = document.querySelector('#result');

    for (const td of tdElements) {
        if (inputEl.value === td.textContent) {
            td.parentElement.remove();
            resultEl.textContent = 'Deleted';
            return;
        }
    }
    resultEl.textContent = 'Not found.';
}