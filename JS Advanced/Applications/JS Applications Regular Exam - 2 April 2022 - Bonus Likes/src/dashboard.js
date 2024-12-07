import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/api.js';

const main = document.querySelector('body > #content');  // probably need to change this

const template = (arr) => html`
        <section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
                ${arr.length === 0 ? html`
                <div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>
                ` : html`
                ${arr.map(x => html`
                <div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src="${x.image}">
                    </article>
                    <h2 class="name">${x.name}</h2>
                    <h3 class="breed">${x.breed}</h3>
                    <div class="action">
                        <a class="btn" href="/dashboard/${x._id}">Details</a>
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