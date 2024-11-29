import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/api.js';

const main = document.querySelector('body > #wrapper > main');   // probably need to change this

const template = (arr) => html`
    <h2>Available Motorcycles</h2>
      <section id="dashboard">
        ${arr.length === 0 ? html`
        <h2 class="no-avaliable">No avaliable motorcycles yet.</h2>
        ` : html`
        ${arr.map(x => html`
        <div class="motorcycle">
          <img src="${x.imageUrl}" alt="example1" />
          <h3 class="model">${x.model}</h3>
          <p class="year">Year: ${x.year}</p>
          <p class="mileage">Mileage: ${x.mileage} km.</p>
          <p class="contact">Contact Number: ${x.contact}</p>
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