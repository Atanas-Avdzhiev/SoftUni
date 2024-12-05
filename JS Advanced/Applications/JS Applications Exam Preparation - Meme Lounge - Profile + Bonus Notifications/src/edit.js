import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getOne } from '../api/api.js';
import { update } from '../api/api.js';
import page from "../node_modules/page/page.mjs";

const main = document.querySelector('body > #container > main');  // probably need to change this

const template = (arr, formHandler) => html`
<section id="edit-meme">
    <form @submit=${formHandler} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" value="${arr.title}" >
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description">${arr.description}</textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value="${arr.imageUrl}" >
            <input type="submit" class="registerbtn button" value="Edit Meme">
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

    const notification = document.querySelector('.notification');

    if (!Object.values(formData).every(value => !!value)) { //check if validations are the same, note this validation wont include select type options
        notification.style.display = 'block';
        notification.querySelector('span').textContent = "All fields are required!";
        setTimeout(() => {
            notification.querySelector('span').textContent = 'MESSAGE';
            notification.style.display = 'none';
        }, 3000);
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