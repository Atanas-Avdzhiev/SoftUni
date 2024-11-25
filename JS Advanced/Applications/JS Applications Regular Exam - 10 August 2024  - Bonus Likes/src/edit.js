import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getOne } from '../api/api.js';
import { update } from '../api/api.js';
import page from "../node_modules/page/page.mjs";

const main = document.querySelector('body > #content > main');

const template = (arr, formHandler) => html`
    <section id="edit">
        <div class="form">
          <h2>Edit tattoo</h2>
          <form @submit=${formHandler} class="edit-form">
            <input type="text" name="type" id="type" placeholder="Tattoo Type" value="${arr.type}" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" value="${arr.imageUrl}" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10">${arr.description}</textarea>
            <select id="user-type" name="user-type" >
              <option value="" disabled >Select your role</option>
              <option value="Tattoo Artist" ?selected=${arr.userType === "Tattoo Artist"} >Tattoo Artist</option>
              <option value="Tattoo Enthusiast" ?selected=${arr.userType === "Tattoo Enthusiast"}>Tattoo Enthusiast</option>
              <option value="First Time in Tattoo" ?selected=${arr.userType === "First Time in Tattoo"}>First Time in Tattoo</option>
              <option value="Tattoo Collector" ?selected=${arr.userType === "Tattoo Collector"}>Tattoo Collector</option>
            </select>
            <button type="submit">Edit</button>
          </form>
        </div>
    </section>
`;

export async function editView(ctx) {
    const { id } = ctx.params;
    const response = await getOne(id);

    render(template(response, editHandler.bind(ctx)), main);
}

async function editHandler(e) {
    e.preventDefault();

    const { id } = this.params;

    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form);

    if (!Object.values(formData).every(value => !!value)) {
        alert('All fields are required!');
        return;
    }

    if (!formData['user-type']) {
        alert('All fields are required!');
        return;
    }

    const data = {
        type: formData.type,
        imageUrl: formData['image-url'],
        description: formData.description,
        userType: formData['user-type']
    }

    const response = await update(data, id);

    if (response._id) {
        page.redirect(`/dashboard/${id}`);
    }
}