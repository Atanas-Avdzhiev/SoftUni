function solve() {
   const buttonsEl = document.querySelectorAll('.add-product');
   const textArea = document.querySelector('textarea');
   let totalPrice = 0;
   let productsArray = [];

   for (const button of buttonsEl) {
      button.addEventListener('click', clicked);
   }

   function clicked(event) {
      const productName = event.currentTarget.parentElement.parentElement.querySelector('.product-title').textContent;
      const productPrice = Number(event.currentTarget.parentElement.parentElement.querySelector('.product-line-price').textContent);
      textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      totalPrice += productPrice;
      if (!productsArray.includes(productName)) {
         productsArray.push(productName);
      }
   }
   const checkoutButton = document.querySelector('.checkout');
   checkoutButton.addEventListener('click', function (event) {
      textArea.textContent += `You bought ${productsArray.join(', ')} for ${totalPrice.toFixed(2)}.`;
      event.currentTarget.setAttribute('disabled', 'disabled');
      for (const button of buttonsEl) {
         button.setAttribute('disabled', 'disabled');
      }
   })
}