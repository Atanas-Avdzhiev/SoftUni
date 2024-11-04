import { showMonth } from './months.js';

const sections = document.querySelectorAll('section:not(#years)');
sections.forEach(section => {
    section.style.display = 'none';
})

const yearSection = document.querySelectorAll('#years td');

yearSection.forEach(year => {
    year.addEventListener('click', (e) => {
        const yearClicked = year.querySelector('div').textContent;
        showMonth(yearClicked)
    })
})