window.addEventListener('load', solve);

function solve() {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const contactNumberInput = document.querySelector('#contact-number');
    const classTypeInput = document.querySelector('#class-type');
    const classTimeInput = document.querySelector('#class-time');
    const nextButton = document.querySelector('#next-btn');
    const ulPreviewSection = document.querySelector('.class-info');
    const ulConfirmSection = document.querySelector('.confirm-class');
    const divElementWithIdMain = document.querySelector('#main');
    const bodyElement = document.querySelector('#body');

    nextButton.addEventListener('click', (event) => {
        event.preventDefault();

        if (nameInput.value === '' ||
            emailInput.value === '' ||
            contactNumberInput.value === '' ||
            classTypeInput.value === '' ||
            classTimeInput.value === '') {
            return;
        }

        const liElement = document.createElement('li');
        liElement.classList = 'info-item';

        const articleElement = document.createElement('article');
        articleElement.classList = 'personal-info';

        const pName = document.createElement('p');
        pName.textContent = nameInput.value;

        const pEmail = document.createElement('p');
        pEmail.textContent = emailInput.value;

        const pContactNumber = document.createElement('p');
        pContactNumber.textContent = contactNumberInput.value;

        const pClassType = document.createElement('p');
        pClassType.textContent = classTypeInput.value;

        const pClassTime = document.createElement('p');
        pClassTime.textContent = classTimeInput.value;

        const editButton = document.createElement('button');
        editButton.classList = 'edit-btn';
        editButton.textContent = 'Edit';

        const continueButton = document.createElement('button');
        continueButton.classList = 'continue-btn';
        continueButton.textContent = 'Continue';

        articleElement.appendChild(pName);
        articleElement.appendChild(pEmail);
        articleElement.appendChild(pContactNumber);
        articleElement.appendChild(pClassType);
        articleElement.appendChild(pClassTime);
        liElement.appendChild(articleElement);
        liElement.appendChild(editButton);
        liElement.appendChild(continueButton);
        ulPreviewSection.appendChild(liElement);

        nameInput.value = '';
        emailInput.value = '';
        contactNumberInput.value = '';
        classTypeInput.value = '';
        classTimeInput.value = '';

        nextButton.disabled = true;

        editButton.addEventListener('click', () => {
            nameInput.value = pName.textContent;
            emailInput.value = pEmail.textContent;
            contactNumberInput.value = pContactNumber.textContent;
            classTypeInput.value = pClassType.textContent;
            classTimeInput.value = pClassTime.textContent;
            liElement.remove();
            nextButton.disabled = false;
        })

        continueButton.addEventListener('click', () => {
            editButton.remove();
            continueButton.remove();

            const cancelButton = document.createElement('button');
            cancelButton.classList = 'cancel-btn';
            cancelButton.textContent = 'Cancel';

            const confirmButton = document.createElement('button');
            confirmButton.classList = 'confirm-btn';
            confirmButton.textContent = 'Confirm';

            liElement.appendChild(cancelButton);
            liElement.appendChild(confirmButton);
            liElement.classList = 'continue-info';
            ulConfirmSection.appendChild(liElement);

            cancelButton.addEventListener('click', () => {
                liElement.remove();
                nextButton.disabled = false;
            })

            confirmButton.addEventListener('click', () => {
                divElementWithIdMain.remove();
                const h1Element = document.createElement('h1');
                h1Element.id = 'thank-you';
                h1Element.textContent = 'Thank you for scheduling your appointment, we look forward to seeing you!';
                const doneButton = document.createElement('button');
                doneButton.id = 'done-btn';
                doneButton.textContent = 'Done';
                bodyElement.appendChild(h1Element);
                bodyElement.appendChild(doneButton);

                doneButton.addEventListener('click', () => {
                    location.reload();
                })
            })
        })
    })
}