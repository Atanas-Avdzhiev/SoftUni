export function showDays(year, month, previousSection) {
    let monthToShow = 0;
    switch (month) {
        case 'Jan': monthToShow = 1;
            break;
        case 'Feb': monthToShow = 2;
            break;
        case 'Mar': monthToShow = 3;
            break;
        case 'Apr': monthToShow = 4;
            break;
        case 'May': monthToShow = 5;
            break;
        case 'Jun': monthToShow = 6;
            break;
        case 'Jul': monthToShow = 7;
            break;
        case 'Aug': monthToShow = 8;
            break;
        case 'Sept': monthToShow = 9;
            break;
        case 'Oct': monthToShow = 10;
            break;
        case 'Nov': monthToShow = 11;
            break;
        case 'Dec': monthToShow = 12;
            break;
    }
    const sectionToShow = document.querySelector(`#month-${year}-${monthToShow}`);
    sectionToShow.style.display = 'block';

    const yearBack = sectionToShow.querySelector('caption');

    yearBack.addEventListener('click', (e) => {
        previousSection.style.display = 'block';
        sectionToShow.style.display = 'none';
    })
}