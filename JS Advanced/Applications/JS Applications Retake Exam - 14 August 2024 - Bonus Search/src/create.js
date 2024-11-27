import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";
import { create } from '../api/api.js';

const main = document.querySelector('body > #wrapper > main');  // probably need to change this

const template = (formHandler) => html`
    <section id="create">
        <div class="form">
          <h2>Add Show</h2>
          <form @submit=${formHandler} class="create-form">
            <input type="text" name="title" id="title" placeholder="TV Show title" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <input type="text" name="genre" id="genre" placeholder="Genre" />
            <input type="text" name="country" id="country" placeholder="Country" />
            <textarea id="details" name="details" placeholder="Details" rows="2" cols="10"></textarea>
            <button type="submit">Add Show</button>
          </form>
        </div>
    </section>
`;

export async function createView() {
    render(template(createHandler), main);
}

async function createHandler(e) {
    e.preventDefault();

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
        const response = await create(data);

        if (response._id) {
            page.redirect('/dashboard');
        }
    }
    catch (err) {
        alert(err.message);
    }
}