import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

const body = document.querySelector('body .container');

const template = (furniture, isOwner = false) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="${furniture.img.startsWith('./') ? furniture.img.replace('./', '/') : furniture.img}" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${furniture.make}</span></p>
                <p>Model: <span>${furniture.model}</span></p>
                <p>Year: <span>${furniture.year}</span></p>
                <p>Description: <span>${furniture.description}</span></p>
                <p>Price: <span>${furniture.price}</span></p>
                <p>Material: <span>${furniture.material}</span></p>
                ${isOwner ? html`
                <div>
                    <a href="/dashboard/${furniture._id}/edit" class="btn btn-info">Edit</a>
                    <a @click=${() => deleteFurniture(furniture._id)} href="javascript:void(0)" class="btn btn-red">Delete</a>
                </div>
                ` : ''}
            </div>
        </div>
`;

export async function details(ctx) {
    const { furnitureID } = ctx.params;
    const detailsURL = `http://localhost:3030/data/catalog/${furnitureID}`;

    const res = await fetch(detailsURL);
    const data = await res.json();

    const userData = JSON.parse(localStorage.getItem('userData'));
    let userID = undefined;
    if (userData) {
        userID = userData._id;
    }
    const isOwner = userID === data._ownerId;
    render(template(data, isOwner), body);
}

async function deleteFurniture(furnitureID) {
    if (!confirm('Are you sure you want to delete this item?')) return;

    const updateURL = `http://localhost:3030/data/catalog/${furnitureID}`;
    const userData = JSON.parse(localStorage.getItem('userData'));

    const res = await fetch(updateURL, {
        method: 'DELETE',
        headers: {
            'X-Authorization': userData.accessToken
        }
    });
    const data = await res.json();
    if (data._deletedOn) {
        page.redirect(`/dashboard`);
    }
}