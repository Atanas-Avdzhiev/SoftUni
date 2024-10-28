function solve() {
  const firstTextArea = document.querySelectorAll('textarea')[0];
  const secondTextArea = document.querySelectorAll('textarea')[1];
  const firstbutton = document.querySelectorAll('button')[0];
  const secondbutton = document.querySelectorAll('button')[1];
  const tbodyElement = document.querySelector('tbody');
  const firstInputCheckboxElement = document.querySelector('input[type="checkbox"]');
  firstInputCheckboxElement.disabled = false;

  firstbutton.addEventListener('click', function (event) {
    const firstTextAreaArrayValue = JSON.parse(firstTextArea.value);
    for (const furniture of firstTextAreaArrayValue) {
      const trElement = document.createElement('tr');
      const tdElement1 = document.createElement('td');
      const tdElement2 = document.createElement('td');
      const tdElement3 = document.createElement('td');
      const tdElement4 = document.createElement('td');
      const tdElement5 = document.createElement('td');

      const imgElement = document.createElement('img');
      imgElement.src = furniture.img;

      const pElement1 = document.createElement('p');
      pElement1.textContent = furniture.name;

      const pElement2 = document.createElement('p');
      pElement2.textContent = Number(furniture.price);

      const pElement3 = document.createElement('p');
      pElement3.textContent = Number(furniture.decFactor);

      const inputElement = document.createElement('input');
      inputElement.type = 'checkbox';

      tdElement5.append(inputElement);
      tdElement4.append(pElement3);
      tdElement3.append(pElement2);
      tdElement2.append(pElement1);
      tdElement1.append(imgElement);
      trElement.append(tdElement1, tdElement2, tdElement3, tdElement4, tdElement5);
      tbodyElement.append(trElement);
    }
  })

  secondbutton.addEventListener('click', function (event) {
    const trElementsInsideTbody = document.querySelectorAll('tbody tr');
    let totalPrice = 0;
    let DecorationFactorSum = 0;
    let numbersOfFurnitures = 0;
    let boughtFurnitures = [];

    for (const furniture of trElementsInsideTbody) {
      const currentInputCheckboxElement = furniture.querySelector('input[type="checkbox"]');
      if (currentInputCheckboxElement.checked) {
        totalPrice += Number(furniture.querySelectorAll('td p')[1].textContent);
        DecorationFactorSum += Number(furniture.querySelectorAll('td p')[2].textContent);
        numbersOfFurnitures++;
        boughtFurnitures.push(furniture.querySelectorAll('td p')[0].textContent);
      }
    }
    let averageDecorationFactor = DecorationFactorSum / numbersOfFurnitures;
    secondTextArea.value += `Bought furniture: ${boughtFurnitures.join(', ')}\n`;
    secondTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    secondTextArea.value += `Average decoration factor: ${averageDecorationFactor}`;
  })
}