import { html, render } from '../node_modules/lit-html/lit-html.js';

const main = document.querySelector('#main-element');

const template = (item, isOwner) => html`
            <section id="details">
                <div id="details-wrapper">
                    <div>
                        <img id="details-img" src=".${item.imageUrl}" alt="example1" />
                        <p id="details-title">${item.item}</p>
                    </div>
                    <div id="info-wrapper">
                        <div id="details-description">
                            <p class="details-price">Price: €${item.price}</p>
                            <p class="details-availability">
                                ${item.availability}
                            </p>
                            <p class="type">Type: ${item.type}</p>
                            <p id="item-description">
                                ${item.description}
                            </p>
                        </div>
                        ${isOwner ? html`
                        <div id="action-buttons">
                            <a href="/market/${item._id}/edit" id="edit-btn">Edit</a>
                            <a href="/market/${item._id}/delete" id="delete-btn">Delete</a>
                        </div>
                        `
        : ''}
                    </div>
                </div>
            </section>
`;

export async function showDetails(ctx) {
    const { itemId } = ctx.params;

    const detailsURL = `http://localhost:3030/data/cyberpunk/${itemId}`;

    const res = await fetch(detailsURL);
    const data = await res.json();

    let isOwner = false;
    let currentOwnerId = '';
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData !== null && userData._id) {
        currentOwnerId = userData._id;
    }

    if (currentOwnerId === data._ownerId) {
        isOwner = true;
    }
    render(template(data, isOwner), main);
}