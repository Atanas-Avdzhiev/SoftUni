import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getOne } from '../api/api.js';
import { update } from '../api/api.js';
import page from "../node_modules/page/page.mjs";

const main = document.querySelector('body > #wrapper > main');  // probably need to change this

const template = (arr, formHandler) => html`
    <section id="edit">
        <div class="form">
          <h2>Edit Show</h2>
          <form @submit=${formHandler} class="edit-form">
            <input type="text" name="title" id="title" placeholder="TV Show title" value="${arr.title}"/>
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" value="${arr.imageUrl}"/>
            <input type="text" name="genre" id="genre" placeholder="Genre" value="${arr.genre}"/>
            <input type="text" name="country" id="country" placeholder="Country" value="${arr.country}"/>
            <textarea id="details" name="details" placeholder="Details" rows="2" cols="10">${arr.details}</textarea>
            <button type="submit">Edit Show</button>
          </form>
        </div>
    </section>
`;

export async function editView(ctx) {
    const { id } = ctx.params;
    try {
        const response = await getOne(id);
        if (response) {
            render(template(response, editHandler.bind(ctx)), main);
        }
    }
    catch (err) {
        alert(err.message);
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
        title: formData.title,
        imageUrl: formData['image-url'],
        genre: formData.genre,
        country: formData.country,    // probably this last property will be different
        details: formData.details
    }
    try {
        const response = await update(data, id);

        if (response._id) {
            page.redirect(`/dashboard/${id}`);
        }
    }
    catch (err) {
        alert(err.message);
    }
}