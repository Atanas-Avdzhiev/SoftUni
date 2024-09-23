function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      const tdElements = document.querySelectorAll('tr');
      const searchInput = document.querySelector('#searchField').value.toLowerCase();

      if (searchInput === '') return;

      for (let i = 2; i < tdElements.length; i++) {
         tdElements[i].classList.remove('select');
      }

      for (let i = 2; i < tdElements.length; i++) {
         let currentRowLowCase = tdElements[i].innerText.toLowerCase();
         if (currentRowLowCase.includes(searchInput) && searchInput !== '') {
            tdElements[i].classList.add('select');
         }
      }
      const searchInputReset = document.querySelector('#searchField');
      searchInputReset.value = '';
   }
}