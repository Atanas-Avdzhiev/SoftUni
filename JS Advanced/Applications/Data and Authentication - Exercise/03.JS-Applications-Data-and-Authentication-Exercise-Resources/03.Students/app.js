const baseURL = 'http://localhost:3030/jsonstore/collections/students';
const form = document.querySelector('body div div form');

fetch(baseURL)
    .then(res => res.json())
    .then(data => {
        const dataValues = Object.values(data);

        const tbody = document.querySelector('tbody');

        dataValues.forEach(student => {
            const tr = document.createElement('tr');
            const tdFirstName = document.createElement('td');
            tdFirstName.textContent = student.firstName;

            const tdLastName = document.createElement('td');
            tdLastName.textContent = student.lastName;

            const tdFacultyNumber = document.createElement('td');
            tdFacultyNumber.textContent = student.facultyNumber;

            const tdGrade = document.createElement('td');
            tdGrade.textContent = student.grade;

            tr.appendChild(tdFirstName);
            tr.appendChild(tdLastName);
            tr.appendChild(tdFacultyNumber);
            tr.appendChild(tdGrade);
            tbody.appendChild(tr);
        })
    })
    .catch(err => alert(err.message));

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstNameInput = document.querySelector('[name=firstName]');
    const lastNameInput = document.querySelector('[name=lastName]');
    const facultyNumberInput = document.querySelector('[name=facultyNumber]');
    const gradeInput = document.querySelector('[name=grade]');

    if (typeof firstNameInput.value !== 'string' || firstNameInput.value === '' ||
        typeof lastNameInput.value !== 'string' || lastNameInput.value === '' ||
        typeof facultyNumberInput.value !== 'string' || (!/^[0-9]+$/.test(facultyNumberInput.value)) ||
        gradeInput.value === '' || (!/^\d+(\.\d+)?$/.test(gradeInput.value))) {
        return;
    }

    fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify({
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            facultyNumber: facultyNumberInput.value,
            grade: gradeInput.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            location.reload();
        })
        .catch(err => alert(err.message));
})