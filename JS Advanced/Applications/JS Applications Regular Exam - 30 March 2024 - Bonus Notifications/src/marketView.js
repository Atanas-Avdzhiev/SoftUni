import { html, render } from '../node_modules/lit-html/lit-html.js';

const main = document.querySelector('#main-element');

const template = (items) => html `
            <h3 class="heading">Market</h3>
            <section id="dashboard">
                ${items.length === 0 ? html`
                    <h3 class="empty">No Items Yet</h3>
                    `
                    : html`
                        ${items.map(item => html`
                    <div class="item">
                        <img src=".${item.imageUrl}" alt="example1" />
                        <h3 class="model">${item.item}</h3>
                        <div class="item-info">
                            <p class="price">Price: €${item.price}</p>
                            <p class="availability">
                            ${item.availability}
                            </p>
                            <p class="type">Type: ${item.type}</p>
                        </div>
                        <a class="details-btn" href="/market/${item._id}">Uncover More</a>
                    </div>
                    `)}
                    `
                }
            </section>
`;

export async function marketView(){

    const marketURL = 'http://localhost:3030/data/cyberpunk?sortBy=_createdOn%20desc';

    const res = await fetch(marketURL);
    const data = await res.json();
    
    render(template(data), main);
    
}