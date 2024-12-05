import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/api.js';

const main = document.querySelector('body > #container > main');  // probably need to change this

const template = (arr) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        ${arr.length === 0 ? html`
        <p class="no-memes">No memes in database.</p>
        ` : html`
        ${arr.map(x => html`
        <div class="meme">
            <div class="card">
                <div class="info">
                    <p class="meme-title">${x.title}</p>
                    <img class="meme-image" alt="meme-img" src="${x.imageUrl}">
                </div>
                <div id="data-buttons">
                    <a class="button" href="/dashboard/${x._id}">Details</a>
                </div>
            </div>
        </div>
        `)}
        `}
    </div>
</section>
`;

export async function dashboardView() {
    const response = await getAll();
    if (response) {
        render(template(response), main);
    }
}