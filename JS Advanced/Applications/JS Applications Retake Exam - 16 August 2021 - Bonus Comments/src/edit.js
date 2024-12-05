import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getOne } from '../api/api.js';
import { update } from '../api/api.js';
import page from "../node_modules/page/page.mjs";

const main = document.querySelector('body > #box > #main-content');  // probably need to change this

const template = (arr, formHandler) => html`
<section id="edit-page" class="auth">
    <form @submit=${formHandler} id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value="${arr.title}">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value="${arr.category}">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value="${arr.maxLevel}">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value="${arr.imageUrl}">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary">${arr.summary}</textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
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