import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

const main = document.querySelector('#main-element');

const template = html `
            <section id="create">
                <div class="form form-item">
                    <h2>Share Your item</h2>
                    <form @submit=${addHandler} class="create-form">
                        <input type="text" name="item" id="item" placeholder="Item" />
                        <input type="text" name="imageUrl" id="item-image" placeholder="Your item Image URL" />
                        <input type="text" name="price" id="price" placeholder="Price in Euro" />
                        <input type="text" name="availability" id="availability"
                            placeholder="Availability Information" />
                        <input type="text" name="type" id="type" placeholder="Item Type" />
                        <textarea id="description" name="description" placeholder="More About The Item" rows="10"
                            cols="50"></textarea>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </section>
`;

export function create(){
    render(template, main);
}

async function addHandler(e){
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if(data.item === '' || data.imageUrl === '' || data.price === '' ||
    data.availability === '' || data.type === '' || data.description === '') return;
    
    const registerURL = 'http://localhost:3030/data/cyberpunk';

    const userData = JSON.parse(localStorage.getItem('userData'));
    const accessToken = userData.accessToken;

    const res = await fetch(registerURL, {
        method: 'POST',
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
    if(serverData._id){
        page.redirect('/market');
    }
}