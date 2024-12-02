// import { html, render } from '../node_modules/lit-html/lit-html.js';
// import { getAll } from '../api/api.js'; //  probably wont need this

// const main = document.querySelector('body > #wrapper > main');   // probably need to change this

// const template = (formHandler) => html`

// `;

// export async function searchView() {
//     render(template(searchHandler), main);
// }

// async function searchHandler(e) {
//     e.preventDefault();

//     const form = new FormData(e.currentTarget);
//     const formData = Object.fromEntries(form);

//     if (!Object.values(formData).every(value => !!value)) { //check if validations are the same, note this validation wont include select type options
//         alert('All fields are required!');
//         return;
//     }

//     const searchURL = `http://localhost:3030/data/shows?where=title%20LIKE%20%22${formData.search}%22`; //  check if the url is correct

//     const response = await fetch(searchURL);
//     const data = await response.json();

//     const searchRoot = document.querySelector('#search .search-result'); //  this also probably needs to be changed

//     const searchTemplate = html`
    
//         ${data.length === 0 ? html`
    
//         <p class="no-result">There is no TV show with this title</p>
    
//         ` : html`
    
//         ${data.map(x => html`
    
//         <div class="show">
//             <img src=".${x.imageUrl}" alt="example1" />
//             <div class="show">
//               <h3 class="title">${x.title}</h3>
//               <p class="genre">Genre: ${x.genre}</p>
//               <p class="country-of-origin">Country of Origin: ${x.country}</p>
//               <a class="details-btn" href="/dashboard/${x._id}">Details</a>
//             </div>
//         </div>
          
//         `)}
//         `}
//     `;

//     if (data) {
//         render(searchTemplate, searchRoot);
//     }
// }