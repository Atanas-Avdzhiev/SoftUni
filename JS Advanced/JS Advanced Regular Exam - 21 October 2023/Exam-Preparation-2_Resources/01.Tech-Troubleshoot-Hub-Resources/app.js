window.addEventListener('load', solution);

function solution() {
  const addButton = document.querySelector('#add-btn');
  const employeeElement = document.querySelector('#employee');
  const categoryElement = document.querySelector('#category');
  const urgencyElement = document.querySelector('#urgency');
  const assignedTeamElement = document.querySelector('#team');
  const descriptionElement = document.querySelector('#description');
  const previewListUlElement = document.querySelector('.preview-list');
  const pendingListUlElement = document.querySelector('.pending-list');
  const resolvedListUlElement = document.querySelector('.resolved-list');

  addButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (employeeElement.value === '' ||
      categoryElement.value === '' ||
      urgencyElement.value === '' ||
      assignedTeamElement.value === '' ||
      descriptionElement.value === '') {
      return;
    }
    const liElement = document.createElement('li');
    liElement.classList = 'problem-content';

    const articleElement = document.createElement('article');

    const currentEmployeeElementValue = employeeElement.value;
    const currentCategoryElementValue = categoryElement.value;
    const currentUrgencyElementValue = urgencyElement.value;
    const currentAssignedTeamElementValue = assignedTeamElement.value;
    const currentDescriptionElementValue = descriptionElement.value;

    const pEmployee = document.createElement('p');
    pEmployee.textContent = 'From: ' + employeeElement.value;

    const pCategory = document.createElement('p');
    pCategory.textContent = 'Category: ' + categoryElement.value;

    const pUrgency = document.createElement('p');
    pUrgency.textContent = 'Urgency: ' + urgencyElement.value;

    const pAssignedTeam = document.createElement('p');
    pAssignedTeam.textContent = 'Assigned to: ' + assignedTeamElement.value;

    const pDescription = document.createElement('p');
    pDescription.textContent = 'Description: ' + descriptionElement.value;

    const editButton = document.createElement('button');
    editButton.classList = 'edit-btn';
    editButton.textContent = 'Edit';

    const continueButton = document.createElement('button');
    continueButton.classList = 'continue-btn';
    continueButton.textContent = 'Continue';

    articleElement.appendChild(pEmployee);
    articleElement.appendChild(pCategory);
    articleElement.appendChild(pUrgency);
    articleElement.appendChild(pAssignedTeam);
    articleElement.appendChild(pDescription);
    liElement.appendChild(articleElement);
    liElement.appendChild(editButton);
    liElement.appendChild(continueButton);
    previewListUlElement.appendChild(liElement);

    employeeElement.value = '';
    categoryElement.value = '';
    urgencyElement.value = '';
    assignedTeamElement.value = '';
    descriptionElement.value = '';

    addButton.disabled = true;

    editButton.addEventListener('click', () => {
      employeeElement.value = currentEmployeeElementValue;
      categoryElement.value = currentCategoryElementValue;
      urgencyElement.value = currentUrgencyElementValue;
      assignedTeamElement.value = currentAssignedTeamElementValue;
      descriptionElement.value = currentDescriptionElementValue;
      addButton.disabled = false;
      liElement.remove();
    })

    continueButton.addEventListener('click', () => {
      editButton.remove();
      continueButton.remove();
      const resolvedButton = document.createElement('button');
      resolvedButton.classList = 'resolve-btn';
      resolvedButton.textContent = 'Resolved';
      liElement.appendChild(resolvedButton);
      pendingListUlElement.appendChild(liElement);

      resolvedButton.addEventListener('click', () => {
        resolvedButton.remove();
        const clearButton = document.createElement('button');
        clearButton.classList = 'clear-btn';
        clearButton.textContent = 'Clear';
        liElement.appendChild(clearButton);
        resolvedListUlElement.appendChild(liElement);

        clearButton.addEventListener('click', () => {
          liElement.remove();
        })
      })
    })
  })
}