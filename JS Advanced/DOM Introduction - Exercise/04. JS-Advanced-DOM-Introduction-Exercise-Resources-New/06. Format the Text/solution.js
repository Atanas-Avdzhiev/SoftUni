function solve() {
  let inputEl = document.querySelector('#input');
  let outputEl = document.querySelector('#output');

  if (inputEl.value === '') return;

  let textArray = inputEl.value.split('. ');
  let numberOfParagraphs = Math.ceil(textArray.length / 3);
  let paragraphs = [];

  for (let i = 1; i <= numberOfParagraphs; i++) {
    let currentSentence = 1;
    let currentParagpgraph = '';

    while (currentSentence <= 3 && textArray.length > 0) {

      currentParagpgraph += textArray.shift();

      currentSentence++;
    }
    paragraphs.push(currentParagpgraph);
  }
  let stringToAppend = '';

  for (let i = 0; i < paragraphs.length; i++) {
    if (i < paragraphs.length - 1) {
      paragraphs[i] += '.';
    }
    stringToAppend += `<p>${paragraphs[i]}</p>`;
  }
  outputEl.innerHTML = stringToAppend;
}