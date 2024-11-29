import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getOne } from '../api/api.js';
import { update } from '../api/api.js';
import page from "../node_modules/page/page.mjs";

const main = document.querySelector('body > #wrapper > main');  // probably need to change this

const template = (arr, formHandler) => html`
    <section id="edit">
        <h2>Edit Motorcycle</h2>
        <div class="form">
          <h2>Edit Motorcycle</h2>
          <form @submit=${formHandler} class="edit-form">
            <input type="text" name="model" id="model" placeholder="Model" value=${arr.model} />
            <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" value=${arr.imageUrl} />
            <input type="number" name="year" id="year" placeholder="Year" value=${arr.year} />
            <input type="number" name="mileage" id="mileage" placeholder="mileage" value=${arr.mileage} />
            <input type="number" name="contact" id="contact" placeholder="contact" value=${arr.contact} />
            <textarea id="about" name="about" placeholder="about" rows="10" cols="50">${arr.about}</textarea>
            <button type="submit">Edit Motorcycle</button>
          </form>
        </div>
    </section>
`;

export async function editView(ctx) {
    const { id } = ctx.params;

    const response = await getOne(id);
    if (response) {
        render(template(response, editHandler.bind(ctx)), main);
    }

}

async function editHandler(e) {
    e.preventDefault();

    const { id } = this.params;

    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form);

    if (!Object.values(formData).every(value => !!value)) { //check if validations are the same, note this validation wont include select type options
        alert('All fields are required!');
        return;
    }

    // if (!formData['user-type']) {   // validation for select type options
    //     alert('All fields are required!');
    //     return;
    // }

    const data = {  // check if data comes correct from the form and goes correct to the server
        model: formData.model,
        imageUrl: formData.imageUrl,
        year: formData.year,
        mileage: formData.mileage,
        contact: formData.contact,
        about: formData.about
    }

    const response = await update(data, id);

    if (response._id) {
        page.redirect(`/dashboard/${id}`);
    }
}