import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";
import { create } from '../api/api.js';

const main = document.querySelector('body > #wrapper > main');

const template = (formHandler) => html`
    <section id="create">
        <div class="form">
          <img class="border" src="./images/border.png" alt="" />
          <h2>Add Solution</h2>
          <form @submit=${formHandler} class="create-form">
            <input type="text" name="type" id="type" placeholder="Solution Type" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
            <textarea id="more-info" name="more-info" placeholder="more Info" rows="2" cols="10"></textarea>
            <button type="submit">Add Solution</button>
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

    const response = await create(data);

    if (response._id) {
        page.redirect('/dashboard');
    }
}