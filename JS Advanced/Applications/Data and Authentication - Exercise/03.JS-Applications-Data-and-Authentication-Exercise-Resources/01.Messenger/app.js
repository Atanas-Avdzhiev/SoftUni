function attachEvents() {

    const nameInput = document.querySelector('[name=author]');
    const messageInput = document.querySelector('[name=content]');
    const submitButton = document.querySelector('#submit');
    const refreshButton = document.querySelector('#refresh');
    const textarea = document.querySelector('#messages');

    submitButton.addEventListener('click', () => {
        const postURL = 'http://localhost:3030/jsonstore/messenger';

        fetch(postURL, {
            method: 'POST',
            body: JSON.stringify({
                author: nameInput.value,
                content: messageInput.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .catch(err => alert(err.message));
    })

    refreshButton.addEventListener('click', () => {
        const postURL = 'http://localhost:3030/jsonstore/messenger';

        fetch(postURL)
            .then(res => res.json())
            .then(data => {
                const dataValues = Object.values(data);
                textarea.textContent = '';
                dataValues.forEach((message, index) => {

                    if (index === 0) {
                        textarea.textContent += `${message.author}: ${message.content}`;
                    }
                    else {
                        textarea.textContent += `\n${message.author}: ${message.content}`;
                    }
                })
            })
            .catch(err => alert(err.message));
    })
}
attachEvents();