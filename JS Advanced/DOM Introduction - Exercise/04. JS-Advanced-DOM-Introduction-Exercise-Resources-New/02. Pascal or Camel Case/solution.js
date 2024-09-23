function solve() {
  let string = document.getElementById('text').value;
  let stringCase = document.getElementById('naming-convention').value;
  let stringArray = string.split(' ')
    .map(word => word.toLowerCase());

  for (let i = 0; i < stringArray.length; i++) {
    let arr = stringArray[i].split('');
    arr[0] = arr[0].toUpperCase();
    stringArray[i] = arr.join('');
  }
  let result = '';
  switch (stringCase) {
    case 'Camel Case': stringArray[0] = stringArray[0].charAt(0).toLowerCase() + stringArray[0].slice(1);
      result = stringArray.join('');
      break;
    case 'Pascal Case': result = stringArray.join('');
      break;
    default: result = 'Error!';
      break;
  }
  let spanElement = document.getElementById('result');
  spanElement.textContent = result;
}