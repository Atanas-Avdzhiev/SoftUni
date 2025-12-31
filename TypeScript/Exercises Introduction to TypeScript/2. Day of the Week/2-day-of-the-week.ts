enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function dayOfWeek(num: number): void {
    console.log(Days[num] ?? 'error');
}

dayOfWeek(7);