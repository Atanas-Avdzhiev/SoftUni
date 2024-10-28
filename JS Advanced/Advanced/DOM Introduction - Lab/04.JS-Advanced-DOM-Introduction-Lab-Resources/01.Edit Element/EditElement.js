function editElement(reference, string, replacer) {
    while (reference.textContent.includes(string)) {
        reference.textContent = reference.textContent.replace(string, replacer);
    }
}