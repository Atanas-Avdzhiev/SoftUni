import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";
import { create } from '../api/api.js';

const main = document.querySelector('body > #content > main');

const template = (formHandler) => html`
    <section id="create">
        <div class="form">
          <h2>Add tattoo</h2>
          <form @submit=${formHandler} class="create-form">
            <input type="text" name="type" id="type" placeholder="Tattoo Type" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
            <select id="user-type" name="user-type">
              <option value="" disabled selected>Select your role</option>
              <option value="Tattoo Artist">Tattoo Artist</option>
              <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
              <option value="First Time in Tattoo">
                First Time in Tattoo
              </option>
              <option value="Tattoo Collector">Tattoo Collector</option>
            </select>
            <button type="submit">Add tattoo</button>
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

    const response = await create(data);

    if (response._id) {
        page.redirect('/dashboard');
    }
}