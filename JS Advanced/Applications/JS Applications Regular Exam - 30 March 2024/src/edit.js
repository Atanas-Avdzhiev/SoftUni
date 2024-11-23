import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

const main = document.querySelector('#main-element');

const template = (item, formHandler) => html`
            <section id="edit">
                <div class="form form-item">
                    <h2>Edit Your Item</h2>
                    <form @submit=${formHandler} class="edit-form">
                        <input type="text" name="item" id="item" placeholder="Item" value="${item.item}"/>
                        <input type="text" name="imageUrl" id="item-image" placeholder="Your item Image URL" value="${item.imageUrl}"/>
                        <input type="text" name="price" id="price" placeholder="Price in Euro" value="${item.price}"/>
                        <input type="text" name="availability" id="availability"
                            placeholder="Availability Information" value="${item.availability}"/>
                        <input type="text" name="type" id="type" placeholder="Item Type" value="${item.type}"/>
                        <textarea id="description" name="description" placeholder="More About The Item" rows="10"
                            cols="50">${item.description}</textarea>
                        <button type="submit">Edit</button>
                    </form>
                </div>
            </section>
`;

export async function editDetails(ctx) {
    const { itemId } = ctx.params;
    const detailsURL = `http://localhost:3030/data/cyberpunk/${itemId}`;

    const res = await fetch(detailsURL);
    const data = await res.json();

    render(template(data, editHandler.bind(ctx)), main);
}

async function editHandler(e) {
    e.preventDefault();

    //const itemId = window.location.pathname.split('/')[2]; // another way to get the itemId instead of binding the ctx to the function when is called on line 32
    const { itemId } = this.params;

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const notification = document.querySelector('.notification');

    if (data.item === '' || data.imageUrl === '' || data.price === '' ||
        data.availability === '' || data.type === '' || data.description === '') {

        notification.style.display = 'block';
        notification.querySelector('span').textContent = "Fields cannot be empty.";
        setTimeout(() => {
            notification.querySelector('span').textContent = 'MESSAGE';
            notification.style.display = 'none';
        }, 3000);
        return;
    }

    const editURL = `http://localhost:3030/data/cyberpunk/${itemId}`;

    const userData = JSON.parse(localStorage.getItem('userData'));
    const accessToken = userData.accessToken;

    const res = await fetch(editURL, {
        method: 'PUT',
        body: JSON.stringify({
            item: data.item,
            imageUrl: data.imageUrl,
            price: data.price,
            availability: data.availability,
            type: data.type,
            description: data.description
        }),
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        }
    })
    const serverData = await res.json();
    if (serverData._id) {
        page.redirect(`/market/${itemId}`);
    }
}