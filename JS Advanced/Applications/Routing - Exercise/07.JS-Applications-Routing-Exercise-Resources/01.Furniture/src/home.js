import { html, render } from '../node_modules/lit-html/lit-html.js';

const body = document.querySelector('body .container');

const template = (furnitures = []) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
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
`;

export async function loadAllFurniture() {

    const allFurnituresURL = 'http://localhost:3030/data/catalog';
    //render(template([]), body);

    const res = await fetch(allFurnituresURL);
    const data = await res.json();

    render(template(data), body);
}