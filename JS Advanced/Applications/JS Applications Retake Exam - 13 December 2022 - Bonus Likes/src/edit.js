import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getOne } from '../api/api.js';
import { update } from '../api/api.js';
import page from "../node_modules/page/page.mjs";

const main = document.querySelector('body > #wrapper > main');  // probably need to change this

const template = (arr, formHandler) => html`
      <section id="edit">
        <div class="form">
          <h2>Edit Product</h2>
          <form @submit=${formHandler} class="edit-form">
            <input type="text" name="name" id="name" placeholder="Product Name" value="${arr.name}" />
            <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" value="${arr.imageUrl}" />
            <input type="text" name="category" id="product-category" placeholder="Category" value="${arr.category}" />
            <textarea id="product-description" name="description" placeholder="Description" rows="5" cols="50">${arr.description}</textarea>
            <input type="text" name="price" id="product-price" placeholder="Price" value="${arr.price}" />
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