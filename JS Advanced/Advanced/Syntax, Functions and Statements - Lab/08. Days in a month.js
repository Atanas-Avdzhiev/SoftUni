function getDaysInMonth(month, year) {

    let data = new Date(year, month, 0).getDate();
    console.log(data);
}
getDaysInMonth(1, 2012)