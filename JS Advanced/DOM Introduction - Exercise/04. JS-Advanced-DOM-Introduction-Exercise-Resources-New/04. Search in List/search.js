function search() {
   let liElements = document.getElementsByTagName('li');
   let searchValue = document.getElementById('searchText').value;
   let matches = 0;

   for (let i = 0; i < liElements.length; i++) {
      liElements[i].style.fontWeight = 'normal';
      liElements[i].style.textDecoration = 'none';
   }

   for (let i = 0; i < liElements.length; i++) {
      if (liElements[i].textContent.includes(searchValue)) {
         liElements[i].style.fontWeight = 'bold';
         liElements[i].style.textDecoration = 'underline';
         matches++;
      }
   }
   if (!searchValue) {
      matches = 0;
   }
   let resultMatches = document.getElementById('result');
   resultMatches.textContent = `${matches} matches found`;
   let searchValueInput = document.getElementById('searchText');
   searchValueInput.value = '';
}