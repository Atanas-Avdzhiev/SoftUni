function extractText() {
    let liElements = document.querySelectorAll('li');
    const items = Array.from(liElements)
        .map(liElement => liElement.textContent);

    let textArea = document.getElementById('result');
    textArea.value = items.join('\n');
}