window.addEventListener("load", solve);

function solve() {
  const nameInput = document.querySelector('#snowman-name');
  const heightInput = document.querySelector('#snowman-height');
  const locationInput = document.querySelector('#location');
  const creatorInput = document.querySelector('#creator-name');
  const specialInput = document.querySelector('#special-attribute');
  const addButton = document.querySelector('.add-btn');
  const ulPreview = document.querySelector('.snowman-preview');
  const ulList = document.querySelector('.snow-list');
  const main = document.querySelector('main');
  const body = document.querySelector('body');
  const backImage = document.querySelector('#back-img');

  addButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (nameInput.value === '' ||
      heightInput.value === '' ||
      locationInput.value === '' ||
      creatorInput.value === '' ||
      specialInput.value === '') {
      return;
    }
    const li = document.createElement('li');
    li.setAttribute('class', 'snowman-info');

    const article = document.createElement('article');

    const pName = document.createElement('p');
    pName.textContent = 'Name: ' + nameInput.value;

    const pHeight = document.createElement('p');
    pHeight.textContent = 'Height: ' + heightInput.value;

    const pLocation = document.createElement('p');
    pLocation.textContent = 'Location: ' + locationInput.value;

    const pCreator = document.createElement('p');
    pCreator.textContent = 'Creator: ' + creatorInput.value;

    const pAttribute = document.createElement('p');
    pAttribute.textContent = 'Attribute: ' + specialInput.value;

    const div = document.createElement('div');
    div.setAttribute('class', 'btn-container');

    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'edit-btn');
    editButton.textContent = 'Edit';

    const nextButton = document.createElement('button');
    nextButton.setAttribute('class', 'next-btn');
    nextButton.textContent = 'Next';

    article.appendChild(pName);
    article.appendChild(pHeight);
    article.appendChild(pLocation);
    article.appendChild(pCreator);
    article.appendChild(pAttribute);
    div.appendChild(editButton);
    div.appendChild(nextButton);
    li.appendChild(article);
    li.appendChild(div);
    ulPreview.appendChild(li);

    const currentNameValue = nameInput.value;
    const currentHeightValue = heightInput.value;
    const currentLocationValue = locationInput.value;
    const currentCreatorValue = creatorInput.value;
    const currentAttributeValue = specialInput.value;

    nameInput.value = '';
    heightInput.value = '';
    locationInput.value = '';
    creatorInput.value = '';
    specialInput.value = '';
    addButton.disabled = true;

    editButton.addEventListener('click', () => {
      nameInput.value = currentNameValue;
      heightInput.value = currentHeightValue;
      locationInput.value = currentLocationValue;
      creatorInput.value = currentCreatorValue;
      specialInput.value = currentAttributeValue;
      li.remove();
      addButton.disabled = false;
    })

    nextButton.addEventListener('click', () => {
      div.remove();
      const sendButton = document.createElement('button');
      sendButton.setAttribute('class', 'send-btn');
      sendButton.textContent = 'Send';
      article.appendChild(sendButton);
      li.setAttribute('class', 'snowman-content');
      ulList.appendChild(li);

      sendButton.addEventListener('click', () => {
        main.remove();
        const backButton = document.createElement('button');
        backButton.setAttribute('class', 'back-btn');
        backButton.textContent = 'Back';
        body.appendChild(backButton);
        backImage.hidden = false;

        backButton.addEventListener('click', () => {
          location.reload();
        })
      })
    })
  })
}