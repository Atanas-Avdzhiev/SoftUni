window.addEventListener("load", solve);

function solve() {
    const nameInput = document.querySelector('#gem-name');
    const colorInput = document.querySelector('#color');
    const caratsInput = document.querySelector('#carats');
    const priceInput = document.querySelector('#price');
    const typeInput = document.querySelector('#type');
    const addButton = document.querySelector('#add-btn');
    const ulPreviewList = document.querySelector('#preview-list');
    const ulCollection = document.querySelector('#collection');


    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (nameInput.value === '' ||
            colorInput.value === '' ||
            caratsInput.value === '' ||
            priceInput.value === '' ||
            typeInput.value === '') return;

        const li = document.createElement('li');
        li.setAttribute('class', 'gem-info');

        const article = document.createElement('article');

        const h4 = document.createElement('h4');
        h4.textContent = nameInput.value;

        const pColor = document.createElement('p');
        pColor.textContent = `Color: ${colorInput.value}`;

        const pCarats = document.createElement('p');
        pCarats.textContent = `Carats: ${caratsInput.value}`;

        const pPrice = document.createElement('p');
        pPrice.textContent = `Price: ${priceInput.value}$`;

        const pType = document.createElement('p');
        pType.textContent = `Type: ${typeInput.value}`;

        const saveButton = document.createElement('button');
        saveButton.setAttribute('class', 'save-btn');
        saveButton.textContent = 'Save to Collection';

        const editButton = document.createElement('button');
        editButton.setAttribute('class', 'edit-btn');
        editButton.textContent = 'Edit Information';

        const cancelButton = document.createElement('button');
        cancelButton.setAttribute('class', 'cancel-btn');
        cancelButton.textContent = 'Cancel';

        article.appendChild(h4);
        article.appendChild(pColor);
        article.appendChild(pCarats);
        article.appendChild(pPrice);
        article.appendChild(pType);
        li.appendChild(article);
        li.appendChild(saveButton);
        li.appendChild(editButton);
        li.appendChild(cancelButton);
        ulPreviewList.appendChild(li);

        const currentColorValue = colorInput.value;
        const currentCaratsValue = caratsInput.value;
        const currentPriceValue = priceInput.value;
        const currentTypeValue = typeInput.value;

        nameInput.value = '';
        colorInput.value = '';
        caratsInput.value = '';
        priceInput.value = '';
        typeInput.value = '';
        addButton.disabled = true;

        editButton.addEventListener('click', () => {
            nameInput.value = h4.textContent;
            colorInput.value = currentColorValue;
            caratsInput.value = currentCaratsValue;
            priceInput.value = currentPriceValue;
            typeInput.value = currentTypeValue;
            saveButton.remove();
            editButton.remove();
            cancelButton.remove();
            li.remove();
            addButton.disabled = false;
        });

        saveButton.addEventListener('click', () => {
            li.remove();
            const liCollection = document.createElement('li');

            const pCollection = document.createElement('p');
            pCollection.setAttribute('class', 'collection-item');
            pCollection.textContent = `${h4.textContent} - ${pColor.textContent}/ ${pCarats.textContent}/ ${pPrice.textContent}/ ${pType.textContent}`;

            liCollection.appendChild(pCollection);
            ulCollection.appendChild(liCollection);
            addButton.disabled = false;
        });

        cancelButton.addEventListener('click', () => {
            li.remove();
            addButton.disabled = false;
        })
    });
}