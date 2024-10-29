async function solution() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const response = await fetch(url);
    const data = await response.json();
    const dataArray = Object.entries(data);
    const main = document.querySelector('#main');

    dataArray.forEach(async (item) => {
        const divAccordion = document.createElement('div');
        divAccordion.setAttribute('class', 'accordion');

        const url2 = `http://localhost:3030/jsonstore/advanced/articles/details/${item[1]._id}`;

        const response2 = await fetch(url2);
        const data2 = await response2.json();

        divAccordion.innerHTML = `<div class="head">
                <span>${item[1].title}</span>
                <button class="button" id="${item[1]._id}">More</button>
            </div>
            <div class="extra">
                <p>${data2.content}</p>
            </div>`;

        const currentButton = divAccordion.querySelector('button');

        currentButton.addEventListener('click', () => {
            const divToShow = divAccordion.querySelector('.extra');
            if (currentButton.textContent === 'More') {
                divToShow.style.display = 'block';
                currentButton.textContent = 'Less';
            }
            else if (currentButton.textContent === 'Less') {
                divToShow.style.display = 'none';
                currentButton.textContent = 'More';
            }
        });

        main.appendChild(divAccordion);
    })
}
window.addEventListener('load', solution);