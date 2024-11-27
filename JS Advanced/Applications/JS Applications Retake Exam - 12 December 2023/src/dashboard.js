import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/api.js';

const main = document.querySelector('body > #wrapper > main');   // probably need to change this

const template = (arr) => html`
        <h3 class="heading">Our Cars</h3>
        <section id="dashboard">
          ${arr.length === 0 ? html`
          <h3 class="nothing">Nothing to see yet</h3>
          ` : html`
          ${arr.map(x => html`
          <div class="car">
            <img src=".${x.imageUrl}" alt="example1" />
            <h3 class="model">${x.model}</h3>
            <div class="specs">
              <p class="price">Price: €${x.price}</p>
              <p class="weight">Weight: ${x.weight} kg</p>
              <p class="top-speed">Top Speed: ${x.speed} kph</p>
            </div>
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