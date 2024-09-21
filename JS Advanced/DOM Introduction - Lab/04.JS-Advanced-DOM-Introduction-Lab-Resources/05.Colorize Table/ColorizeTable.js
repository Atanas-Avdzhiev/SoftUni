function colorize() {
    const evenRowElements = document.querySelectorAll('table tr:nth-child(even)');
    for (const evenRow of evenRowElements) {
        evenRow.style.backgroundColor = 'teal';
    }
}