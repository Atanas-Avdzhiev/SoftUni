import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getOne } from '../api/api.js';
import { update } from '../api/api.js';
import page from "../node_modules/page/page.mjs";

const main = document.querySelector('body > #wrapper > main');

const template = (arr, formHandler) => html`
    <section id="edit">
        <div class="form">
          <img class="border" src="./images/border.png" alt="" />
          <h2>Edit Solution</h2>
          <form @submit=${formHandler} class="edit-form">
            <input type="text" name="type" id="type" placeholder="Solution Type" value="${arr.type}" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" value="${arr.imageUrl}" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10">${arr.description}</textarea>
            <textarea id="more-info" name="more-info" placeholder="more Info" rows="2" cols="10">${arr.learnMore}</textarea>
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

    const data = {
        type: formData.type,
        imageUrl: formData['image-url'],
        description: formData.description,
        learnMore: formData['more-info']
    }

    const response = await update(data, id);

    if (response._id) {
        page.redirect(`/dashboard/${id}`);
    }
}