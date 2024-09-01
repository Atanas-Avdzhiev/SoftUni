function getNextDay(year, month, day) {
    var date = new Date(year, month - 1, day); // Note: month is 0-indexed in JavaScript
    date.setDate(date.getDate() + 1);
    var nextYear = date.getFullYear();
    var nextMonth = date.getMonth() + 1; // Adding 1 to get the month in human-readable format (1-indexed)
    var nextDay = date.getDate();

    // Formatting output
    if (nextMonth < 10) {
        nextMonth = "0" + nextMonth;
    }
    if (nextDay < 10) {
        nextDay = "0" + nextDay;
    }

    console.log(nextYear + "-" + nextMonth + "-" + nextDay);
    return nextYear + "-" + nextMonth + "-" + nextDay;
}

// Example usage:
getNextDay(2016, 9, 30);