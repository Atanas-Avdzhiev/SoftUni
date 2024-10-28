window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.querySelector('#first-name');
    const lastNameInput = document.querySelector('#last-name');
    const numberInput = document.querySelector('#people-count');
    const dateInput = document.querySelector('#from-date');
    const daysInput = document.querySelector('#days-count');
    const nextButton = document.querySelector('#next-btn');
    const ulTicketInfoList = document.querySelector('.ticket-info-list');
    const ulConfirmTicket = document.querySelector('.confirm-ticket');
    const divToRemove = document.querySelector('#main');
    const body = document.querySelector('#body');

    nextButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (firstNameInput.value === '' ||
            lastNameInput.value === '' ||
            numberInput.value === '' ||
            dateInput.value === '' ||
            daysInput.value === '') return;

        const li = document.createElement('li');
        li.setAttribute('class', 'ticket');

        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

        const pDate = document.createElement('p');
        pDate.textContent = `From date: ${dateInput.value}`;

        const pDays = document.createElement('p');
        pDays.textContent = `For ${daysInput.value} days`;

        const pNumber = document.createElement('p');
        pNumber.textContent = `For ${numberInput.value} people`;

        const editButton = document.createElement('button');
        editButton.setAttribute('class', 'edit-btn');
        editButton.textContent = 'Edit';

        const continueButton = document.createElement('button');
        continueButton.setAttribute('class', 'continue-btn');
        continueButton.textContent = 'Continue';

        article.appendChild(h3);
        article.appendChild(pDate);
        article.appendChild(pDays);
        article.appendChild(pNumber);
        li.appendChild(article);
        li.appendChild(editButton);
        li.appendChild(continueButton);
        ulTicketInfoList.appendChild(li);

        const currentFirstNameValue = firstNameInput.value;
        const currentLastNameValue = lastNameInput.value;
        const currentDateValue = dateInput.value;
        const currentDaysValue = daysInput.value;
        const currentNumberValue = numberInput.value;

        firstNameInput.value = '';
        lastNameInput.value = '';
        dateInput.value = '';
        daysInput.value = '';
        numberInput.value = '';
        nextButton.disabled = true;

        editButton.addEventListener('click', () => {
            firstNameInput.value = currentFirstNameValue;
            lastNameInput.value = currentLastNameValue;
            dateInput.value = currentDateValue;
            daysInput.value = currentDaysValue;
            numberInput.value = currentNumberValue;
            nextButton.disabled = false;
            li.remove();
        })

        continueButton.addEventListener('click', () => {
            editButton.remove();
            continueButton.remove();
            li.remove();

            li.setAttribute('class', 'ticket-content');

            const confirmButton = document.createElement('button');
            confirmButton.setAttribute('class', 'confirm-btn');
            confirmButton.textContent = 'Confirm';

            const cancelButton = document.createElement('button');
            cancelButton.setAttribute('class', 'cancel-btn');
            cancelButton.textContent = 'Cancel';

            li.appendChild(confirmButton);
            li.appendChild(cancelButton);
            ulConfirmTicket.appendChild(li);

            cancelButton.addEventListener('click', () => {
                li.remove();
                nextButton.disabled = false;
            })

            confirmButton.addEventListener('click', () => {
                divToRemove.remove();

                const h1 = document.createElement('h1');
                h1.id = 'thank-you';
                h1.textContent = 'Thank you, have a nice day!';

                const backButton = document.createElement('button');
                backButton.id = 'back-btn';
                backButton.textContent = 'Back';

                body.appendChild(h1);
                body.appendChild(backButton);

                backButton.addEventListener('click', () => {
                    location.reload();
                })
            })

        })
    })
}