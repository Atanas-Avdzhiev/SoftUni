window.addEventListener("load", solve);

function solve() {
    const numTicketsInput = document.querySelector('#num-tickets');
    const seatInput = document.querySelector('#seating-preference');
    const nameInput = document.querySelector('#full-name');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone-number');
    const purchaseButton = document.querySelector('#purchase-btn');
    const ulPreview = document.querySelector('#ticket-preview');
    const ulPurchase = document.querySelector('#ticket-purchase');
    const divBottom = document.querySelector('.bottom-content');

    purchaseButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (numTicketsInput.value === '' ||
            seatInput.value === '' ||
            nameInput.value === '' ||
            emailInput.value === '' ||
            phoneInput.value === '') return;

        const li = document.createElement('li');
        li.setAttribute('class', 'ticket-purchase');

        const article = document.createElement('article');

        const pTickets = document.createElement('p');
        pTickets.textContent = 'Count: ' + numTicketsInput.value;

        const pSeat = document.createElement('p');
        pSeat.textContent = 'Preference: ' + seatInput.value;

        const pName = document.createElement('p');
        pName.textContent = 'To: ' + nameInput.value;

        const pEmail = document.createElement('p');
        pEmail.textContent = 'Email: ' + emailInput.value;

        const pPhone = document.createElement('p');
        pPhone.textContent = 'Phone Number: ' + phoneInput.value;

        const div = document.createElement('div');
        div.setAttribute('class', 'btn-container');

        const editButton = document.createElement('button');
        editButton.setAttribute('class', 'edit-btn');
        editButton.textContent = 'Edit';

        const nextButton = document.createElement('button');
        nextButton.setAttribute('class', 'next-btn');
        nextButton.textContent = 'Next';

        article.appendChild(pTickets);
        article.appendChild(pSeat);
        article.appendChild(pName);
        article.appendChild(pEmail);
        article.appendChild(pPhone);
        div.appendChild(editButton);
        div.appendChild(nextButton);
        li.appendChild(article);
        li.appendChild(div);
        ulPreview.appendChild(li);

        const currentNumTicketsValue = numTicketsInput.value;
        const currentSeatValue = seatInput.value;
        const currentNameValue = nameInput.value;
        const currentEmailValue = emailInput.value;
        const currentPhoneValue = phoneInput.value;

        numTicketsInput.value = '';
        seatInput.value = '';
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        purchaseButton.disabled = true;

        editButton.addEventListener('click', () => {
            numTicketsInput.value = currentNumTicketsValue;
            seatInput.value = currentSeatValue;
            nameInput.value = currentNameValue;
            emailInput.value = currentEmailValue;
            phoneInput.value = currentPhoneValue;
            li.remove();
            purchaseButton.disabled = false;
        })

        nextButton.addEventListener('click', () => {
            li.remove();
            const buyButton = document.createElement('button');
            buyButton.setAttribute('class', 'buy-btn');
            buyButton.textContent = 'Buy';
            article.appendChild(buyButton);
            ulPurchase.appendChild(li);

            buyButton.addEventListener('click', () => {
                li.remove();
                const h2 = document.createElement('h2');
                h2.textContent = 'Thank you for your purchase!';
                const backButton = document.createElement('button');
                backButton.setAttribute('class', 'back-btn');
                backButton.textContent = 'Back';
                divBottom.appendChild(h2);
                divBottom.appendChild(backButton);

                backButton.addEventListener('click', () => {
                    location.reload();
                })
            })
        })
    })
}