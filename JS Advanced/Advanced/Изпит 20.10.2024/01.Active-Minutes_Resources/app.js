window.addEventListener("load", solve);

function solve() {
  const typeInput = document.querySelector('#type');
  const intensityInput = document.querySelector('#intensity');
  const caloriesInput = document.querySelector('#calories');
  const durationInput = document.querySelector('#duration');
  const dateInput = document.querySelector('#date');
  const addButton = document.querySelector('#add-activity');
  const ulPreviewActivity = document.querySelector('#preview-activity');
  const tbody = document.querySelector('#activities-table');

  addButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (typeInput.value === '' ||
      intensityInput.value === '' ||
      caloriesInput.value === '' ||
      durationInput.value === '' ||
      dateInput.value === '') return;

    const li = document.createElement('li');

    const article = document.createElement('article');

    const pActivity = document.createElement('p');
    pActivity.textContent = `Activity: ${typeInput.value}`;

    const pIntensity = document.createElement('p');
    pIntensity.textContent = `Intensity: ${intensityInput.value}`;

    const pDuration = document.createElement('p');
    pDuration.textContent = `Duration: ${durationInput.value} min.`;

    const pDate = document.createElement('p');
    pDate.textContent = `Date: ${dateInput.value}`;

    const pCalories = document.createElement('p');
    pCalories.textContent = `Calories: ${caloriesInput.value}`;

    const div = document.createElement('div');
    div.setAttribute('class', 'btn-container');

    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'edit-btn');
    editButton.textContent = 'Edit';

    const nextButton = document.createElement('button');
    nextButton.setAttribute('class', 'next-btn');
    nextButton.textContent = 'Next';

    article.appendChild(pActivity);
    article.appendChild(pIntensity);
    article.appendChild(pDuration);
    article.appendChild(pDate);
    article.appendChild(pCalories);
    div.appendChild(editButton);
    div.appendChild(nextButton);
    li.appendChild(article);
    li.appendChild(div);
    ulPreviewActivity.appendChild(li);

    const currenTypetValue = typeInput.value;
    const currenIntensitytValue = intensityInput.value;
    const currentDurationValue = durationInput.value;
    const currentDateValue = dateInput.value;
    const currentCaloriesValue = caloriesInput.value;

    typeInput.value = '';
    intensityInput.value = '';
    durationInput.value = '';
    dateInput.value = '';
    caloriesInput.value = '';
    addButton.disabled = true;

    editButton.addEventListener('click', () => {
      typeInput.value = currenTypetValue;
      intensityInput.value = currenIntensitytValue;
      durationInput.value = currentDurationValue;
      dateInput.value = currentDateValue;
      caloriesInput.value = currentCaloriesValue;
      li.remove();
      addButton.disabled = false;
    })

    nextButton.addEventListener('click', () => {
      li.remove();

      const tr = document.createElement('tr');

      const tdType = document.createElement('td');
      tdType.setAttribute('class', 'type-cell');
      tdType.textContent = currenTypetValue;

      const tdDuration = document.createElement('td');
      tdDuration.setAttribute('class', 'duration-cell');
      tdDuration.textContent = currentDurationValue;

      const tdCalories = document.createElement('td');
      tdCalories.setAttribute('class', 'calories-cell');
      tdCalories.textContent = currentCaloriesValue;

      const tdDate = document.createElement('td');
      tdDate.setAttribute('class', 'date-cell');
      tdDate.textContent = currentDateValue;

      const tdIntensity = document.createElement('td');
      tdIntensity.setAttribute('class', 'intensity-cell');
      tdIntensity.textContent = currenIntensitytValue;

      const tdButton = document.createElement('td');
      tdButton.setAttribute('class', 'btn-cell');

      const deleteButton = document.createElement('button');
      deleteButton.setAttribute('class', 'delete-btn');
      deleteButton.textContent = 'Delete';

      tdButton.appendChild(deleteButton);

      tr.appendChild(tdType);
      tr.appendChild(tdDuration);
      tr.appendChild(tdCalories);
      tr.appendChild(tdDate);
      tr.appendChild(tdIntensity);
      tr.appendChild(tdButton);
      tbody.appendChild(tr);

      addButton.disabled = false;

      deleteButton.addEventListener('click', () => {
        tr.remove();
      })
    })
  })
}