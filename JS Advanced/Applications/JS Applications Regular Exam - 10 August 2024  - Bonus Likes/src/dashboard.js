import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/api.js';

const main = document.querySelector('body > #content > main');

const template = (arr = []) => html`
    <h2>Collection</h2>
      <section id="tattoos">
        
        ${arr.length === 0 ? html`
        <h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>
        `: html`
        ${arr.map(x => html`
            <div class="tattoo">
          <img src=".${x.imageUrl}" alt="example1" />
          <div class="tattoo-info">
            <h3 class="type">${x.type}</h3>
            <span>Uploaded by </span>
            <p class="user-type">${x.userType}</p>
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