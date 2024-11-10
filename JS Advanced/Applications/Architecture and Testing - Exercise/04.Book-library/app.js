const loadButton = document.querySelector('#loadBooks');
const baseURL = 'http://localhost:3030/jsonstore/collections/books';
const tbody = document.querySelector('body table tbody');
const form = document.querySelector('body form');
const body = document.querySelector('body');
const submitButton = document.querySelector('form button');
tbody.innerHTML = '';

loadButton.addEventListener('click', () => {
    const titleInput = form.querySelector('input[name=title]');
    titleInput.value = '';
    const authorInput = form.querySelector('input[name=author]');
    authorInput.value = '';
    tbody.innerHTML = '';

    fetch(baseURL)
        .then(res => res.json())
        .then(data => {
            Object.entries(data).forEach(book => {

                const tr = createBook(book[1], book[0]);
                tbody.appendChild(tr);
            })
        })
        .catch(err => alert(err.message));
})

function createBook(book, id) {
    const tr = document.createElement('tr');

    const tdTitle = document.createElement('td');
    tdTitle.textContent = `${book.title}`;

    const tdAuthor = document.createElement('td');
    tdAuthor.textContent = `${book.author}`;

    const tdButtons = document.createElement('td');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    tdButtons.appendChild(editButton);
    tdButtons.appendChild(deleteButton);
    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdButtons);

    editButton.addEventListener('click', (e) => {
        form.style.display = 'none';
        const currentForm = body.querySelectorAll('form')[1];

        if (currentForm) {
            currentForm.remove();
        }

        const saveForm = document.createElement('form');
        saveForm.id = 'edit-form';

        const h3 = document.createElement('h3');
        h3.textContent = 'Edit FORM';

        const titleLabel = document.createElement('label');
        titleLabel.textContent = 'TITLE';

        const titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('name', 'title');
        titleInput.setAttribute('placeholder', 'Title...');
        titleInput.value = book.title;

        const authorLabel = document.createElement('label');
        authorLabel.textContent = 'AUTHOR';

        const authorInput = document.createElement('input');
        authorInput.setAttribute('type', 'text');
        authorInput.setAttribute('name', 'author');
        authorInput.setAttribute('placeholder', 'Author...');
        authorInput.value = book.author;

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';

        saveForm.appendChild(h3);
        saveForm.appendChild(titleLabel);
        saveForm.appendChild(titleInput);
        saveForm.appendChild(authorLabel);
        saveForm.appendChild(authorInput);
        saveForm.appendChild(saveButton);
        body.appendChild(saveForm);

        saveButton.addEventListener('click', (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget.parentElement);
            const formEntries = Object.fromEntries(formData);
            fetch(`${baseURL}/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    author: formEntries.author,
                    title: formEntries.title
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => { loadButton.click() })
                .catch(err => alert(err.message));
            e.currentTarget.parentElement.remove();
            form.style.display = 'block';
        })
    });

    deleteButton.addEventListener('click', (e) => {
        fetch(`${baseURL}/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => { loadButton.click() })
            .catch(err => alert(err.message));
    })

    return tr;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formEntries = Object.fromEntries(formData);

    if (formEntries.title === '' || formEntries.author === '') return;

    fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify({
            author: formEntries.author,
            title: formEntries.title
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => { loadButton.click() })
        .catch(err => alert(err.message));
})