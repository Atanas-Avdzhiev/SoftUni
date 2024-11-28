import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/api.js';

const main = document.querySelector('body > #wrapper > main');   // probably need to change this

const template = (arr) => html`
    <h2>Characters</h2>
      <section id="characters">
        ${arr.length === 0 ? html`
        <h2>No added Heroes yet.</h2>
        ` : html`
        ${arr.map(x => html`
        <div class="character">
          <img src="${x.imageUrl}" alt="example1" />
          <div class="hero-info">
            <h3 class="category">${x.category}</h3>
            <p class="description">${x.description}</p>
            <a class="details-btn" href="/dashboard/${x._id}">More Info</a>
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