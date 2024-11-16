import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

const body = document.querySelector('body');

const template = (furniture = []) => html`
<div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${(e) => { e.preventDefault(); editHandler(furniture._id) }}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" value="${furniture.make}">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model" value="${furniture.model}">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year" value="${furniture.year}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" value="${furniture.description}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" value="${furniture.price}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" value="${furniture.img}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="${furniture.material}">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>
    </div>
`;

export async function edit(ctx) {
    //render(template([]), body);
    const res = await fetch(`http://localhost:3030/data/catalog/${ctx.params.furnitureID}`);
    const data = await res.json();

    render(template(data), body);
}

async function editHandler(furnitureID) {
    const formData = new FormData(document.querySelector('body .container form'));
    const data = Object.fromEntries(formData);

    if (data.make.length < 4 || data.model.length < 4) return;
    if (data.year <= 1950 || data.year >= 2050) return;
    if (data.description.length <= 10) return;
    if (Number(data.price) <= 0) return;
    if (data.img === '') return;

    const updateURL = `http://localhost:3030/data/catalog/${furnitureID}`;
    const userData = JSON.parse(localStorage.getItem('userData'));

    const res = await fetch(updateURL, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.accessToken
        }
    });
    const serverData = await res.json();
    if (serverData._id) {
        page.redirect(`/dashboard/${furnitureID}`);
    }
}