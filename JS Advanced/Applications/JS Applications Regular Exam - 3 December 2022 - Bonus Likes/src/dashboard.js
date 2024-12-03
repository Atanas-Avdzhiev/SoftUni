import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/api.js';

const main = document.querySelector('body > #wrapper > main');   // probably need to change this

const template = (arr) => html`
      <section id="dashboard">
        <h2>Albums</h2>
        <ul class="card-wrapper">
          ${arr.length === 0 ? html`
          <h2>There are no albums added yet.</h2>
          ` : html`
          ${arr.map(x => html`
          <li class="card">
            <img src="${x.imageUrl}" alt="travis" />
            <p>
              <strong>Singer/Band: </strong><span class="singer">${x.singer}</span>
            </p>
            <p>
              <strong>Album name: </strong><span class="album">${x.album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${x.sales}</span></p>
            <a class="details-btn" href="/dashboard/${x._id}">Details</a>
          </li>
          `)}
          `}
        </ul>
      </section>
`;

export async function dashboardView() {
    const response = await getAll();
    if (response) {
        render(template(response), main);
    }
}