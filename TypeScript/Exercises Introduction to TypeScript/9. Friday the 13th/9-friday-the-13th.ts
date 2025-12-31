function fridayThe13th(value: unknown[]): void {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    for (const date of value) {
        if (date instanceof Date && !isNaN(date.getTime())) {
            if (date.getDate() === 13 && date.getDay() === 5) {
                console.log(`${date.getDate()}-${monthNames[date.getMonth()]}-${date.getFullYear()}`);
            }
        }
    }
}

fridayThe13th([
    new Date(2024, 0, 13),
    new Date(2024, 1, 13),
    new Date(2024, 2, 13),
    new Date(2024, 3, 13),
    new Date(2024, 4, 13),
    new Date(2024, 5, 13),
    new Date(2024, 6, 13),
    new Date(2024, 7, 13),
    new Date(2024, 8, 13),
    new Date(2024, 9, 13),
    new Date(2024, 10, 13),
    new Date(2024, 11, 13)
]);