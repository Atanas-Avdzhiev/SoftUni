function encodeAndDecodeMessages() {
    const buttons = document.querySelectorAll('button');
    const firstButton = Array.from(buttons).find(button => button.textContent === 'Encode and send it');
    const secondButton = Array.from(buttons).find(button => button.textContent === 'Decode and read it');
    const firstTextArea = firstButton.parentElement.querySelector('textarea');
    const secondTextArea = secondButton.parentElement.querySelector('textarea');

    firstButton.addEventListener('click', function (event) {
        let currentValue = firstTextArea.value;
        let encodedValue = '';

        for (let i = 0; i < currentValue.length; i++) {
            let newChar = currentValue.charCodeAt(i) + 1;
            encodedValue += String.fromCharCode(newChar);
        }
        secondTextArea.value = encodedValue;
        firstTextArea.value = '';
    })

    secondButton.addEventListener('click', function (event) {
        let currentValue = secondTextArea.value;
        let decodedValue = '';

        for (let i = 0; i < currentValue.length; i++) {
            let newChar = currentValue.charCodeAt(i) - 1;
            decodedValue += String.fromCharCode(newChar);
        }
        secondTextArea.value = decodedValue;
    })
}