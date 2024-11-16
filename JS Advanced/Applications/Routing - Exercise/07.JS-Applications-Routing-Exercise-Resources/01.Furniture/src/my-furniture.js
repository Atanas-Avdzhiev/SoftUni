import { html, render } from '../node_modules/lit-html/lit-html.js';

const body = document.querySelector('body');

const template = (furnitures = []) => html`
<div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${furnitures.map(furniture => html`
                <div class="col-md-4">
                    <div class="card text-white bg-primary">
                        <div class="card-body">
                            <img src="${furniture.img}" />
                            <p>${furniture.description}</p>
                            <footer>
                                <p>Price: <span>${furniture.price} $</span></p>
                            </footer>
                            <div>
                                <a href="/dashboard/${furniture._id}" class="btn btn-info">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                `)}
        </div>
</div>
`;

export async function myFurniture() {
    //render(template([]), body);
    const userData = JSON.parse(localStorage.getItem('userData'));
    const myFurnituresURL = `http://localhost:3030/data/catalog?where=_ownerId%3D%22${userData._id}%22`;

    const res = await fetch(myFurnituresURL);
    const data = await res.json();

    render(template(data), body);
}