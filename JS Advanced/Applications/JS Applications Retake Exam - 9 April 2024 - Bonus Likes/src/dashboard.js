import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/api.js';

const main = document.querySelector('body > #wrapper > main');

const template = (arr = []) => html`
    <h2>Solutions</h2>
    <section id="solutions">
        ${arr.length === 0 ? html`
        <h2 id="no-solution">No Solutions Added.</h2>
        ` : html`
        ${arr.map(x => html`
            <div class="solution">
          <img src=".${x.imageUrl}" alt="example1" />
          <div class="solution-info">
            <h3 class="type">${x.type}</h3>
            <p class="description">
              ${x.description}
            </p>
            <a class="details-btn" href="/dashboard/${x._id}">Learn More</a>
          </div>
        </div>
                `)}
        `}
    </section>
`;

export async function dashboardView() {
    const response = await getAll();
    render(template(response), main);
}