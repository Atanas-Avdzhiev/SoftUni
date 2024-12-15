import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getOne } from '../api/api.js';
import { update } from '../api/api.js';
import page from "../node_modules/page/page.mjs";

const main = document.querySelector('body > #wrapper > main');  // probably need to change this

const template = (arr, formHandler) => html`
      <section id="edit">
        <div class="form form-item">
          <h2>Edit Offer</h2>
          <form @submit=${formHandler} class="edit-form">
            <input type="text" name="model" id="model" placeholder="Drone Model" value="${arr.model}" />
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" value="${arr.imageUrl}" />
            <input type="number" name="price" id="price" placeholder="Price" value="${arr.price}" />
            <input type="number" name="weight" id="weight" placeholder="Weight" value="${arr.weight}" />
            <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" value="${arr.phone}" />
            <input type="text" name="condition" id="condition" placeholder="Condition" value="${arr.condition}" />
            <textarea name="description" id="description" placeholder="Description">${arr.description}</textarea>
            <button type="submit">Edit</button>
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

    const notification = document.querySelector('.notification');

    if (!Object.values(formData).every(value => !!value)) { //check if validations are the same, note this validation wont include select type options
        notification.style.display = 'block';
        notification.querySelector('span').textContent = "Fields cannot be empty.";
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