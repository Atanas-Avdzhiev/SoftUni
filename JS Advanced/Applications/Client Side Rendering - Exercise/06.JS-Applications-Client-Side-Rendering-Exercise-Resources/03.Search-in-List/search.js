import { towns } from "./towns.js";
import { render, html } from "./node_modules/lit-html/lit-html.js";

const rootElement = document.querySelector('#towns');

const template = () => html`
   <ul>
      ${towns.map(town => html`<li>${town}</li>`)}
   </ul>
`;

render(template(), rootElement);

const searchButton = document.querySelector('article button');
searchButton.addEventListener('click', search);

function search() {
   const searchInput = document.querySelector('#searchText');
   const liElements = document.querySelectorAll('#towns li');
   let matches = 0;

   liElements.forEach(li => {
      if (li.textContent.includes(searchInput.value)) {
         li.classList.add('active');
         matches++;
      }
   })
   const result = document.querySelector('#result');
   result.textContent = `${matches} matches found`;
}
