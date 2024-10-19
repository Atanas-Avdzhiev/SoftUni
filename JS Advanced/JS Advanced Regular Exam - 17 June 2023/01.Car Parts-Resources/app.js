window.addEventListener('load', solve);

function solve() {
        const modelInput = document.querySelector('#car-model');
        const yearInput = document.querySelector('#car-year');
        const nameInput = document.querySelector('#part-name');
        const numberInput = document.querySelector('#part-number');
        const conditionInput = document.querySelector('#condition');
        const nextButton = document.querySelector('#next-btn');
        const ulInfoList = document.querySelector('.info-list');
        const img = document.querySelector('#complete-img');
        const pCompleteText = document.querySelector('#complete-text');
        const ulConfirmList = document.querySelector('.confirm-list');

        nextButton.addEventListener('click', (event) => {
                event.preventDefault();
                if (modelInput.value === '' ||
                        yearInput.value === '' ||
                        nameInput.value === '' ||
                        numberInput.value === '' ||
                        conditionInput.value === '' ||
                        Number(yearInput.value) < 1980 ||
                        Number(yearInput.value) > 2023) return;

                const li = document.createElement('li');
                li.setAttribute('class', 'part-content');

                const article = document.createElement('article');

                const pModel = document.createElement('p');
                pModel.textContent = `Car Model: ${modelInput.value}`;

                const pYear = document.createElement('p');
                pYear.textContent = `Car Year: ${yearInput.value}`;

                const pName = document.createElement('p');
                pName.textContent = `Part Name: ${nameInput.value}`;

                const pNumber = document.createElement('p');
                pNumber.textContent = `Part Number: ${numberInput.value}`;

                const pCondition = document.createElement('p');
                pCondition.textContent = `Condition: ${conditionInput.value}`;

                const editButton = document.createElement('button');
                editButton.setAttribute('class', 'edit-btn');
                editButton.textContent = 'Edit';

                const continueButton = document.createElement('button');
                continueButton.setAttribute('class', 'continue-btn');
                continueButton.textContent = 'Continue';

                article.appendChild(pModel);
                article.appendChild(pYear);
                article.appendChild(pName);
                article.appendChild(pNumber);
                article.appendChild(pCondition);
                li.appendChild(article);
                li.appendChild(editButton);
                li.appendChild(continueButton);
                ulInfoList.appendChild(li);

                img.style.visibility = 'hidden';
                pCompleteText.textContent = '';

                const currentModelValue = modelInput.value;
                const currentYearValue = yearInput.value;
                const currentNameValue = nameInput.value;
                const currentNumberValue = numberInput.value;
                const currentConditionValue = conditionInput.value;

                modelInput.value = '';
                yearInput.value = '';
                nameInput.value = '';
                numberInput.value = '';
                conditionInput.value = '';
                nextButton.disabled = true;

                editButton.addEventListener('click', () => {
                        editButton.remove();
                        continueButton.remove();
                        li.remove();

                        modelInput.value = currentModelValue;
                        yearInput.value = currentYearValue;
                        nameInput.value = currentNameValue;
                        numberInput.value = currentNumberValue;
                        conditionInput.value = currentConditionValue;
                        nextButton.disabled = false;
                });

                continueButton.addEventListener('click', () => {
                        editButton.remove();
                        continueButton.remove();
                        li.remove();

                        const confirmButton = document.createElement('button');
                        confirmButton.setAttribute('class', 'confirm-btn');
                        confirmButton.textContent = 'Confirm';

                        const cancelButton = document.createElement('button');
                        cancelButton.setAttribute('class', 'cancel-btn');
                        cancelButton.textContent = 'Cancel';
                        li.appendChild(confirmButton);
                        li.appendChild(cancelButton);
                        ulConfirmList.appendChild(li);

                        confirmButton.addEventListener('click', () => {
                                li.remove();
                                nextButton.disabled = false;
                                img.style.visibility = 'visible';
                                pCompleteText.textContent = 'Part is Ordered!';
                        });

                        cancelButton.addEventListener('click', () => {
                                li.remove();
                                nextButton.disabled = false;
                        })
                })
        })
}