import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/api.js';

const main = document.querySelector('body > #wrapper > main');   // probably need to change this

const template = (arr) => html`
      <h2>Products</h2>
      <section id="dashboard">
        ${arr.length === 0 ? html`
        <h2>No products yet.</h2>
        ` : html`
        ${arr.map(x => html`
        <div class="product">
          <img src="${x.imageUrl}" alt="example1" />
          <p class="title">${x.name}</p>
          <p><strong>Price:</strong><span class="price">${x.price}</span>$</p>
          <a class="details-btn" href="/dashboard/${x._id}">Details</a>
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