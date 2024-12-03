import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getOne } from '../api/api.js';
import { update } from '../api/api.js';
import page from "../node_modules/page/page.mjs";

const main = document.querySelector('body > #wrapper > main');  // probably need to change this

const template = (arr, formHandler) => html`
      <section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form @submit=${formHandler} class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value="${arr.singer}" />
            <input type="text" name="album" id="album-album" placeholder="Album" value="${arr.album}" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" value="${arr.imageUrl}" />
            <input type="text" name="release" id="album-release" placeholder="Release date" value="${arr.release}" />
            <input type="text" name="label" id="album-label" placeholder="Label" value="${arr.label}" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" value="${arr.sales}" />
            <button type="submit">post</button>
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

    // const data = {  // check if data comes correct from the form and goes correct to the server
    //     type: formData.type,
    //     imageUrl: formData['image-url'],
    //     description: formData.description,
    //     learnMore: formData['more-info']    // probably this last property will be different
    // }

    const response = await update(formData, id);

    if (response._id) {
        page.redirect(`/dashboard/${id}`);
    }
}