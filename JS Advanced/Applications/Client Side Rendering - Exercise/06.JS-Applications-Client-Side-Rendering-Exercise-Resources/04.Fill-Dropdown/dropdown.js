import { render, html } from "./node_modules/lit-html/lit-html.js";

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const selectMenu = document.querySelector('#menu');

async function getItems() {
    const res = await fetch(url);
    const data = await res.json();

    const optionsTemplate = (data) => html`
    ${Object.values(data).map(
        (value) => html`<option value=${value._id}>${value.text}</option>`
    )}
`;
    render(optionsTemplate(data), selectMenu);

    const addButton = document.querySelector('form input[type="submit"]');
    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        addItem();
    })
}

getItems()

async function addItem() {
    const textInput = document.querySelector('#itemText');

    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            text: textInput.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json();
    if (data._id) {
        textInput.value = '';
        getItems();
    }
}