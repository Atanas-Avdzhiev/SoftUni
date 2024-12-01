import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/api.js';

const main = document.querySelector('body > #wrapper > main');   // probably need to change this

const template = (arr) => html`
      <h2>Fruits</h2>
      <section id="dashboard">
        ${arr.length === 0 ? html`
        <h2>No fruit info yet.</h2>
        ` : html`
        ${arr.map(x => html`
        <div class="fruit">
          <img src="${x.imageUrl}" alt="example1" />
          <h3 class="title">${x.name}</h3>
          <p class="description">${x.description}</p>
          <a class="details-btn" href="/dashboard/${x._id}">More Info</a>
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