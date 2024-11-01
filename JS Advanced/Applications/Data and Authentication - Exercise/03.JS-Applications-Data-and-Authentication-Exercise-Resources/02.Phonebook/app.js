function attachEvents() {
    const loadButton = document.querySelector('#btnLoad');
    const createButton = document.querySelector('#btnCreate');
    const ul = document.querySelector('#phonebook');

    const baseURL = 'http://localhost:3030/jsonstore/phonebook';

    loadButton.addEventListener('click', () => {
        fetch(baseURL)
            .then(res => res.json())
            .then(data => {
                ul.innerHTML = '';
                const dataValues = Object.values(data);
                dataValues.forEach(person => {
                    const li = document.createElement('li');
                    li.textContent = `${person.person}: ${person.phone}`;

                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';

                    deleteButton.addEventListener('click', () => {
                        const deleteURL = `http://localhost:3030/jsonstore/phonebook/${person._id}`;
                        fetch(deleteURL, {
                            method: 'DELETE'
                        })
                        // .then(res => res.json())
                        // .then(data => {
                        //     //loadButton.click();
                        // })
                        // .catch();
                    })
                    li.appendChild(deleteButton);
                    ul.appendChild(li);
                })
            })
        //.catch();
    })

    createButton.addEventListener('click', () => {

        const personInput = document.querySelector('#person');
        const phoneInput = document.querySelector('#phone');

        fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify({
                "person": personInput.value,
                "phone": phoneInput.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                personInput.value = '';
                phoneInput.value = '';
                loadButton.click();
            })
        //.catch();
    })
}
attachEvents();