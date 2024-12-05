import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";
import { create } from '../api/api.js';

const main = document.querySelector('body > #container > main');  // probably need to change this

const template = (formHandler) => html`
<section id="create-meme">
    <form @submit=${formHandler} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>
`;

export async function createView() {
    render(template(createHandler), main);
}

async function createHandler(e) {
    e.preventDefault();

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

    const response = await create(formData);

    if (response._id) {
        page.redirect('/dashboard');
    }
}