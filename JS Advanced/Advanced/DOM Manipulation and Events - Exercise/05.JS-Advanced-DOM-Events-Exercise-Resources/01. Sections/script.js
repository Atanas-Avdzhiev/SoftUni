function create(words) {
   const mainDivElement = document.querySelector('#content');

   for (const word of words) {
      const divElement = document.createElement('div');
      const pElement = document.createElement('p');
      pElement.textContent = word;
      pElement.style.display = 'none';
      divElement.addEventListener('click', function (event) {
         pElement.style.display = 'block';
      })
      divElement.append(pElement);
      mainDivElement.append(divElement);
   }
}