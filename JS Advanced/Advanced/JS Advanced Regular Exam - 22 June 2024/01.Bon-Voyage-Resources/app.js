window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.querySelector('#first-name');
    const lastNameInput = document.querySelector('#last-name');
    const fromDateInput = document.querySelector('#from-date');
    const toDateInput = document.querySelector('#to-date');
    const nextButton = document.querySelector('#next-btn');
    const ulInfoList = document.querySelector('.info-list');
    const ulConfirmList = document.querySelector('.confirm-list');
    const h1 = document.querySelector('#status');

    nextButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (firstNameInput.value === '' ||
            lastNameInput.value === '' ||
            fromDateInput.value === '' ||
            toDateInput.value === '') {
            return;
        }
        const fromDateArray = fromDateInput.value.split('-').map(Number);
        const toDateArray = toDateInput.value.split('-').map(Number);
        if (fromDateArray[0] > toDateArray[0]) return;
        else if ((fromDateArray[0] === toDateArray[0]) && (fromDateArray[1] > toDateArray[1])) return;
        else if ((fromDateArray[0] === toDateArray[0]) && (fromDateArray[1] === toDateArray[1]) && (fromDateArray[2] >= toDateArray[2])) return;
        // A better way to check the date:
        //new Date(fromDateInput.value) >= new Date(toDateInput.value)

        const li = document.createElement('li');
        li.className = 'vacation-content';

        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = 'Name: ' + firstNameInput.value + ' ' + lastNameInput.value;

        const pFromDate = document.createElement('p');
        pFromDate.textContent = 'From Date: ' + fromDateInput.value;

        const pToDate = document.createElement('p');
        pToDate.textContent = 'To Date: ' + toDateInput.value;

        const editButton = document.createElement('button');
        editButton.className = 'edit-btn';
        editButton.textContent = 'Edit';

        const continueButton = document.createElement('button');
        continueButton.className = 'continue-btn';
        continueButton.textContent = 'Continue';

        article.appendChild(h3);
        article.appendChild(pFromDate);
        article.appendChild(pToDate);
        li.appendChild(article);
        li.appendChild(editButton);
        li.appendChild(continueButton);
        ulInfoList.appendChild(li);

        const firstNameValue = firstNameInput.value;
        const lastNameValue = lastNameInput.value;
        const fromDateValue = fromDateInput.value;
        const toDateValue = toDateInput.value;

        firstNameInput.value = '';
        lastNameInput.value = '';
        fromDateInput.value = '';
        toDateInput.value = '';
        nextButton.disabled = true;

        editButton.addEventListener('click', () => {
            firstNameInput.value = firstNameValue;
            lastNameInput.value = lastNameValue;
            fromDateInput.value = fromDateValue;
            toDateInput.value = toDateValue;
            li.remove();
            nextButton.disabled = false;
        })

        continueButton.addEventListener('click', () => {
            editButton.remove();
            continueButton.remove();

            const confirmButton = document.createElement('button');
            confirmButton.className = 'confirm-btn';
            confirmButton.textContent = 'Confirm';

            const cancelButton = document.createElement('button');
            cancelButton.className = 'cancel-btn';
            cancelButton.textContent = 'Cancel';

            li.appendChild(confirmButton);
            li.appendChild(cancelButton);
            ulConfirmList.appendChild(li);

            confirmButton.addEventListener('click', () => {
                li.remove();
                nextButton.disabled = false;
                h1.className = "vacation-confirmed";
                h1.textContent = "Vacation Requested";
            })

            cancelButton.addEventListener('click', () => {
                li.remove();
                nextButton.disabled = false;
                h1.className = "vacation-cancelled";
                h1.textContent = "Cancelled Vacation";
            })

            h1.addEventListener('click', () => {
                location.reload();
            })
        })
    })
}