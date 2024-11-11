import { cats } from './catSeeder.js';
import { render, html } from './node_modules/lit-html/lit-html.js'

const rootElement = document.querySelector('#allCats');

function toggleStatus(id) {
    const currentElement = document.getElementById(id);
    const button = currentElement.parentElement.querySelector('button');

    if (currentElement.style.display === 'none') {
        currentElement.style.display = 'block'
        button.textContent = 'Hide status code';
    }
    else if (currentElement.style.display === 'block') {
        currentElement.style.display = 'none'
        button.textContent = 'Show status code';
    }
    //render(ul(), rootElement);
}

const ul = () => html`
<ul>
    ${cats.map(cat => html`
        <li>
            <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn" @click=${() => toggleStatus(cat.id)}>Show status code</button>
                    <div class="status" style="display: none" id="${cat.id}">
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
        </li>
            `)}
</ul>
`
render(ul(), rootElement);