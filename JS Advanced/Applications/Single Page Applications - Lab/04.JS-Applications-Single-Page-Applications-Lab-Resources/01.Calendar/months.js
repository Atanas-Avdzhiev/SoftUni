import { showDays } from './days.js';

export function showMonth(yearID) {
    const currentSectionCaption = document.querySelector(`#year-${yearID} caption`);
    const yearSection = document.querySelector('#years');
    const currentMainSection = document.querySelector(`#year-${yearID}`);

    currentSectionCaption.addEventListener('click', (e) => {
        yearSection.style.display = 'block';
        currentMainSection.style.display = 'none';
    })

    yearSection.style.display = 'none';
    currentMainSection.style.display = 'block';

    const tdClassDay = currentMainSection.querySelectorAll('.day');

    tdClassDay.forEach(month => {
        month.addEventListener('click', (e) => {
            const currentYear = currentSectionCaption.textContent;
            const currentMonth = e.currentTarget.querySelector('div').textContent;
            currentMainSection.style.display = 'none';
            showDays(currentYear, currentMonth, currentMainSection);
        })
    })
}