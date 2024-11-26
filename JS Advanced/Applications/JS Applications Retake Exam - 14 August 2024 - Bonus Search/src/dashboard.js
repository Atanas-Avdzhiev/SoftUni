import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/api.js';

const main = document.querySelector('body > #wrapper > main');   // probably need to change this

const template = (arr = []) => html`
    <h2>Users Recommendations</h2>
      <section id="shows">
        ${arr.length === 0 ? html`
        <h2 id="no-show">No shows Added.</h2>
        ` : html`
        ${arr.map(x => html`
        <div class="show">
          <img src=".${x.imageUrl}" alt="example1" />
          <div class="show-info">
            <h3 class="title">${x.title}</h3>
            <p class="genre">Genre: ${x.genre}</p>
            <p class="country-of-origin">Country of Origin: ${x.country}</p>
            <a class="details-btn" href="/dashboard/${x._id}">Details</a>
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