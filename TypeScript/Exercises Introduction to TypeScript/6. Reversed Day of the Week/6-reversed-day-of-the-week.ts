enum DaysOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function reverseDay(day: string): void {
    console.log(DaysOfWeek[day as keyof typeof DaysOfWeek] || 'error');
}

reverseDay('Friday');