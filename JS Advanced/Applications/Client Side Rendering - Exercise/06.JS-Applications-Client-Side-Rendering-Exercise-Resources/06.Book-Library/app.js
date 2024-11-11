import { render, html } from "./node_modules/lit-html/lit-html.js";

const url = 'http://localhost:3030/jsonstore/collections/books';
const body = document.querySelector('body');

const initialPage = html`
<button id="loadBooks" @click=${loadBooks}>LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>

    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>

    <form id="edit-form" style="display: none;">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>
`;

render(initialPage, body);

const addForm = document.querySelector('#add-form');
const submitButton = document.querySelector('input[value="Submit"]');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    addBook();
})

const editForm = document.querySelector('#edit-form');

async function loadBooks() {

    addForm.style.display = 'block';
    editForm.style.display = 'none';

    const res = await fetch(url);
    const data = await res.json();

    const tbody = document.querySelector('table tbody');

    const tableRowTemplate = html`
    ${Object.entries(data).map(book => html`
        <tr id=${book[0]}>
            <td>${book[1].title}</td>
            <td>${book[1].author}</td>
            <td>
                <button @click=${() => onEdit(book)}>Edit</button>
                <button @click=${() => onDelete(book)}>Delete</button>
            </td>
        </tr>
            `)}
    `
    render(initialPage, body);
    render(tableRowTemplate, tbody);
}

async function addBook() {

    const titleInput = document.querySelector('#add-form input[name="title"]');
    const authorInput = document.querySelector('#add-form input[name="author"]');

    if (titleInput.value === '' || authorInput.value === '') return;

    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            author: authorInput.value,
            title: titleInput.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json();
    authorInput.value = '';
    titleInput.value = '';
    loadBooks();
}

function onEdit(bookClicked) {

    addForm.style.display = 'none';
    editForm.style.display = 'block';

    editForm.reset();
    const titleInput = editForm.querySelector('input[name="title"]');
    const authorInput = editForm.querySelector('input[name="author"]');

    titleInput.value = bookClicked[1].title;
    authorInput.value = bookClicked[1].author;

    //cool way to remove previous event listeners from a button:
    let saveButton = editForm.querySelector('input[value="Save"]');

    const newSaveButton = saveButton.cloneNode(true);
    saveButton.replaceWith(newSaveButton);
    saveButton = newSaveButton;

    saveButton.addEventListener('click', dataSend);

    async function dataSend(e) {
        e.preventDefault();

        const editURL = `http://localhost:3030/jsonstore/collections/books/${bookClicked[0]}`;

        const res = await fetch(editURL, {
            method: 'PUT',
            body: JSON.stringify({
                author: authorInput.value,
                title: titleInput.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        loadBooks();
    }
}

async function onDelete(bookClicked) {
    const editURL = `http://localhost:3030/jsonstore/collections/books/${bookClicked[0]}`;

    const res = await fetch(editURL, {
        method: 'DELETE'
    });
    const data = await res.json();
    loadBooks();
}