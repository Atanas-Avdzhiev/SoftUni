import { render, html } from './node_modules/lit-html/lit-html.js';

const inputTowns = document.querySelector('#towns');
const loadButton = document.querySelector('#btnLoadTowns');
const divRoot = document.querySelector('#root');

loadButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (inputTowns.value === '') return;

    const towns = inputTowns.value.split(', ');

    const ul = () => html`
        <ul>
            ${towns.map(town => html`<li>${town}</li>`)}
        </ul>
        `;

    render(ul(), divRoot)
})