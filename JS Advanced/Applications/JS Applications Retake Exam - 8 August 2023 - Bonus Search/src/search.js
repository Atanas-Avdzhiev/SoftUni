import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/api.js'; //  probably wont need this

const main = document.querySelector('body > #wrapper > main');   // probably need to change this

const template = (formHandler) => html`
<section id="search">

<div class="form">
  <h4>Search</h4>
  <form @submit=${formHandler} class="search-form">
    <input type="text" name="search" id="search-input" />
    <button class="button-list">Search</button>
  </form>
</div>
<h4 id="result-heading">Results:</h4>
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

    const searchURL = `http://localhost:3030/data/motorcycles?where=model%20LIKE%20%22${formData.search}%22`; //  check if the url is correct

    const response = await fetch(searchURL);
    const data = await response.json();

    const searchRoot = document.querySelector('#search .search-result'); //  this also probably needs to be changed

    const searchTemplate = html`
    
        ${data.length === 0 ? html`
    
        <h2 class="no-avaliable">No result.</h2>
    
        ` : html`
    
        ${data.map(x => html`

        <div class="motorcycle">
            <img src="${x.imageUrl}" alt="example1" />
            <h3 class="model">${x.model}</h3>
            <a class="details-btn" href="/dashboard/${x._id}">More Info</a>
        </div>
          
        `)}
        `}
    `;

    if (data) {
        render(searchTemplate, searchRoot);
    }
}