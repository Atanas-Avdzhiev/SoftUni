window.addEventListener('load', solve);

function solve() {
    const timeInput = document.querySelector('#time');
    const dateInput = document.querySelector('#date');
    const placeInput = document.querySelector('#place');
    const eventInput = document.querySelector('#event-name');
    const contactInput = document.querySelector('#email');
    const addButton = document.querySelector('#add-btn');
    const ulCheckList = document.querySelector('#check-list');
    const ulUpcomingList = document.querySelector('#upcoming-list');
    const ulFinishedList = document.querySelector('#finished-list');
    const clearButton = document.querySelector('#clear');

    addButton.addEventListener('click', (event) => {
        event.preventDefault();

        if (timeInput.value === '' ||
            dateInput.value === '' ||
            placeInput.value === '' ||
            eventInput.value === '' ||
            contactInput.value === '') return;

        const li = document.createElement('li');
        li.setAttribute('class', 'event-content');

        const article = document.createElement('article');

        const pBegins = document.createElement('p');
        pBegins.textContent = `Begins: ${dateInput.value} at: ${timeInput.value}`;

        const pIn = document.createElement('p');
        pIn.textContent = `In: ${placeInput.value}`;

        const pEvent = document.createElement('p');
        pEvent.textContent = `Event: ${eventInput.value}`;

        const pContact = document.createElement('p');
        pContact.textContent = `Contact: ${contactInput.value}`;

        const editButton = document.createElement('button');
        editButton.setAttribute('class', 'edit-btn');
        editButton.textContent = 'Edit';

        const continueButton = document.createElement('button');
        continueButton.setAttribute('class', 'continue-btn');
        continueButton.textContent = 'Continue';

        article.appendChild(pBegins);
        article.appendChild(pIn);
        article.appendChild(pEvent);
        article.appendChild(pContact);
        li.appendChild(article);
        li.appendChild(editButton);
        li.appendChild(continueButton);
        ulCheckList.appendChild(li);

        const currentTimeValue = timeInput.value;
        const currentDateValue = dateInput.value;
        const currentPlaceValue = placeInput.value;
        const currentEventValue = eventInput.value;
        const currentContactValue = contactInput.value;

        timeInput.value = '';
        dateInput.value = '';
        placeInput.value = '';
        eventInput.value = '';
        contactInput.value = '';
        addButton.disabled = true;

        editButton.addEventListener('click', () => {
            timeInput.value = currentTimeValue;
            dateInput.value = currentDateValue;
            placeInput.value = currentPlaceValue;
            eventInput.value = currentEventValue;
            contactInput.value = currentContactValue;
            li.remove();
            addButton.disabled = false;
        })

        continueButton.addEventListener('click', () => {
            editButton.remove();
            continueButton.remove();
            li.remove();

            const moveButton = document.createElement('button');
            moveButton.setAttribute('class', 'finished-btn');
            moveButton.textContent = 'Move to Finished';

            li.appendChild(moveButton);
            ulUpcomingList.appendChild(li);
            addButton.disabled = false;

            moveButton.addEventListener('click', () => {
                moveButton.remove();
                li.remove();
                ulFinishedList.appendChild(li);

                clearButton.addEventListener('click', () => {
                    li.remove();
                })
            })
        })
    })
}