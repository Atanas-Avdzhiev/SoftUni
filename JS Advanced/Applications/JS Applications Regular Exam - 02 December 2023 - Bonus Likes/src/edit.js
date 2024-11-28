import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getOne } from '../api/api.js';
import { update } from '../api/api.js';
import page from "../node_modules/page/page.mjs";

const main = document.querySelector('body > #wrapper > main');  // probably need to change this

const template = (arr, formHandler) => html`
    <section id="edit">
        <div class="form">
          <img class="border" src="./images/border.png" alt="">
          <h2>Edit Character</h2>
          <form @submit=${formHandler} class="edit-form">
            <input type="text" name="category" id="category" placeholder="Character Type" value="${arr.category}"/>
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" value="${arr.imageUrl}"/>
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10">${arr.description}</textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="2" cols="10">${arr.moreInfo}</textarea>
            <button type="submit">Edit</button>
          </form>
          <img class="border" src="./images/border.png" alt="">
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
        category: formData.category,
        imageUrl: formData['image-url'],
        description: formData.description,
        moreInfo: formData['additional-info']
    }

    const response = await update(data, id);

    if (response._id) {
        page.redirect(`/dashboard/${id}`);
    }
}