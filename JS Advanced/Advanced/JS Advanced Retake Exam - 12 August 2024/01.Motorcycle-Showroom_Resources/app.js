window.addEventListener("load", solve);

function solve() {
  const colorInput = document.querySelector('#colors');
  const modelInput = document.querySelector('#motorcycles');
  const dateAndTimeInput = document.querySelector('#datetime');
  const nameInput = document.querySelector('#full-name');
  const emailInput = document.querySelector('#email');
  const testRideButton = document.querySelector('#test-ride-btn');
  const ulPreview = document.querySelector('#preview-list');
  const ulComplete = document.querySelector('#complete-list');
  const divForFinalButton = document.querySelector('.data-view');

  testRideButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (colorInput.value === '' ||
      modelInput.value === '' ||
      dateAndTimeInput.value === '' ||
      nameInput.value === '' ||
      emailInput.value === '') {
      return;
    }
    const li = document.createElement('li');
    const article = document.createElement('article');

    const pColor = document.createElement('p');
    pColor.textContent = 'Color: ' + colorInput.value;

    const pModel = document.createElement('p');
    pModel.textContent = 'Model: ' + modelInput.value;

    const pName = document.createElement('p');
    pName.textContent = 'For: ' + nameInput.value;

    const pEmail = document.createElement('p');
    pEmail.textContent = 'Contact: ' + emailInput.value;

    const pDate = document.createElement('p');
    pDate.textContent = 'Test Ride On: ' + dateAndTimeInput.value;

    const div = document.createElement('div');
    div.setAttribute('class', 'btn-container');

    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'edit-btn');
    editButton.textContent = 'Edit';

    const nextButton = document.createElement('button');
    nextButton.setAttribute('class', 'next-btn');
    nextButton.textContent = 'Next';

    article.appendChild(pColor);
    article.appendChild(pModel);
    article.appendChild(pName);
    article.appendChild(pEmail);
    article.appendChild(pDate);
    div.appendChild(editButton);
    div.appendChild(nextButton);
    li.appendChild(article);
    li.appendChild(div);
    ulPreview.appendChild(li);

    const colorValue = colorInput.value;
    const modelValue = modelInput.value;
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const dateValue = dateAndTimeInput.value;

    colorInput.value = '';
    modelInput.value = '';
    nameInput.value = '';
    emailInput.value = '';
    dateAndTimeInput.value = '';
    testRideButton.disabled = true;

    editButton.addEventListener('click', () => {
      colorInput.value = colorValue;
      modelInput.value = modelValue;
      nameInput.value = nameValue;
      emailInput.value = emailValue;
      dateAndTimeInput.value = dateValue;
      li.remove();
      testRideButton.disabled = false;
    })

    nextButton.addEventListener('click', () => {
      div.remove();
      const completeButton = document.createElement('button');
      completeButton.setAttribute('class', 'complete-btn');
      completeButton.textContent = 'Complete';
      article.appendChild(completeButton);
      ulComplete.appendChild(li);

      completeButton.addEventListener('click', () => {
        li.remove();
        const finalButton = document.createElement('button');
        finalButton.setAttribute('class', 'confirm-btn');
        finalButton.textContent = 'Your Test Ride is Confirmed';
        divForFinalButton.appendChild(finalButton);

        finalButton.addEventListener('click', () => {
          location.reload();
        })
      })
    })
  })
}