import { render, html } from "./node_modules/lit-html/lit-html.js";

async function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const url = 'http://localhost:3030/jsonstore/advanced/table';
   const res = await fetch(url);
   const data = await res.json();

   const tbody = document.querySelector('table tbody');

   const tableRowTemplate = () => html`
   ${Object.values(data).map(row => html`
      <tr>
         <td>${row.firstName} ${row.lastName}</td>
         <td>${row.email}</td>
         <td>${row.course}</td>
      </tr>
         `)}
   `;

   render(tableRowTemplate(), tbody);

   function onClick() {
      const searchInput = document.querySelector('#searchField');
      if (searchInput.value === '') return;

      const tableRows = document.querySelectorAll('table tbody tr');
      tableRows.forEach(row => row.classList.remove('select'));

      const tdCells = document.querySelectorAll('table tbody td');

      tdCells.forEach(cell => {
         const searchLowerCase = searchInput.value.toLowerCase();
         const currentCellLowerCase = cell.textContent.toLowerCase();

         if (currentCellLowerCase.includes(searchLowerCase)) {
            cell.parentElement.classList.add('select');
         }
      })
      searchInput.value = '';
   }
}
solve()