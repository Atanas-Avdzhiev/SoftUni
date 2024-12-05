import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/api.js';

const main = document.querySelector('body > #box > #main-content');  // probably need to change this

const template = (arr) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    ${arr.length === 0 ? html`
    <h3 class="no-articles">No articles yet</h3>
    ` : html`
    ${arr.map(x => html`
    <div class="allGames">
        <div class="allGames-info">
            <img src="${x.imageUrl}">
            <h6>${x.category}</h6>
            <h2>${x.title}</h2>
            <a href="/dashboard/${x._id}" class="details-button">Details</a>
        </div>

    </div>
    `)}
    `}
</section>
`;

export async function dashboardView() {
    const response = await getAll();
    if (response) {
        render(template(response), main);
    }
}