import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";
import { create } from '../api/api.js';

const main = document.querySelector('body > #wrapper > main');  // probably need to change this

const template = (formHandler) => html`
    <section id="create">
        <div class="form">
          <img class="border" src="./images/border.png" alt="">
          <h2>Add Character</h2>
          <form @submit=${formHandler} class="create-form">
            <input type="text" name="category" id="category" placeholder="Character Type" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="2"
              cols="10"></textarea>
            <button type="submit">Add Character</button>
          </form>
          <img class="border" src="./images/border.png" alt="">
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
        category: formData.category,
        imageUrl: formData['image-url'],
        description: formData.description,
        moreInfo: formData['additional-info']
    }

    const response = await create(data);

    if (response._id) {
        page.redirect('/dashboard');
    }
}