import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getOne } from '../api/api.js';
import { update } from '../api/api.js';
import page from "../node_modules/page/page.mjs";

const main = document.querySelector('body > #wrapper > main');  // probably need to change this

const template = (arr, formHandler) => html`
    <section id="edit">
        <div class="form form-auto">
          <h2>Edit Your Car</h2>
          <form @submit=${formHandler} class="edit-form">
            <input type="text" name="model" id="model" placeholder="Model" value="${arr.model}"/>
            <input type="text" name="imageUrl" id="car-image" placeholder="Your Car Image URL" value="${arr.imageUrl}"/>
            <input type="text" name="price" id="price" placeholder="Price in Euro" value="${arr.price}"/>
            <input type="number" name="weight" id="weight" placeholder="Weight in Kg" value="${arr.weight}"/>
            <input type="text" name="speed" id="speed" placeholder="Top Speed in Kmh" value="${arr.speed}"/>
            <textarea id="about" name="about" placeholder="More About The Car" rows="10" cols="50">${arr.about}</textarea>
            <button type="submit">Edit</button>
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
        price: formData.price,
        weight: formData.weight,
        speed: formData.speed,
        about: formData.about,
    }

    const response = await update(data, id);

    if (response._id) {
        page.redirect(`/dashboard/${id}`);
    }
}