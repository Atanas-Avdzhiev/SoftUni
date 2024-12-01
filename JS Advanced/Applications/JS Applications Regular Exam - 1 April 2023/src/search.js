import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/api.js'; //  probably wont need this

const main = document.querySelector('body > #wrapper > main');   // probably need to change this

const template = (formHandler) => html`
<section id="search" style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
<div class="form">
  <h2>Search</h2>
  <form @submit=${formHandler} class="search-form">
    <input type="text" name="search" id="search-input" />
    <button class="button-list">Search</button>
  </form>
</div>
<h4>Results:</h4>
<div class="search-result">
</div>
</section>
`;

export async function searchView() {
    render(template(searchHandler), main);
}

async function searchHandler(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form);

    if (!Object.values(formData).every(value => !!value)) { //check if validations are the same, note this validation wont include select type options
        alert('All fields are required!');
        return;
    }

    const searchURL = `http://localhost:3030/data/fruits?where=name%20LIKE%20%22${formData.search}%22`; //  check if the url is correct

    const response = await fetch(searchURL);
    const data = await response.json();

    const searchRoot = document.querySelector('#search .search-result'); //  this also probably needs to be changed

    const searchTemplate = html`
    
        ${data.length === 0 ? html`
    
        <p class="no-result">No result.</p>
    
        ` : html`
    
        ${data.map(x => html`
    
        <div class="fruit">
        <img src="${x.imageUrl}" alt="example1" />
        <h3 class="title">${x.name}</h3>
        <p class="description">${x.description}</p>
        <a class="details-btn" href="/dashboard/${x._id}">More Info</a>
        </div>
          
        `)}
        `}
    `;

    if (data) {
        render(searchTemplate, searchRoot);
    }
}