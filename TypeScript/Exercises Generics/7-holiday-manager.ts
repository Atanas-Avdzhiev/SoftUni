enum TravelVacation { Abroad = 'Abroad', InCountry = 'InCountry' };

enum MountainVacation { Ski = 'Ski', Hiking = 'Hiking' };

enum BeachVacation { Pool = 'Pool', Sea = 'Sea', ScubaDiving = 'ScubaDiving' };

interface Holiday {
    set start(val: Date);
    set end(val: Date);
    getInfo(): string;
}

interface VacationManager<T, V> {
    reserveVacation(holiday: T, vacationType: V): void;
    listReservations(): string;
}

class PlannedHoliday implements Holiday {
    private _start!: Date;
    private _end!: Date;

    constructor(startDate: Date, endDate: Date) {

        if (startDate > endDate) {
            throw new Error("End date cannot be before start date");
        }

        this.start = startDate;
        this.end = endDate;
    }

    set start(val: Date) {
        if (val > this._end) {
            throw new Error('End date cannot be before start date');
        }
        this._start = val;
    }

    set end(val: Date) {
        if (val < this._start) {
            throw new Error('End date cannot be before start date');
        }
        this._end = val;
    }

    getInfo(): string {
        return `Holiday: ${this._start.toLocaleDateString("en-GB")} - ${this._end.toLocaleDateString("en-GB")}`;
    }
}

class HolidayManager<T extends Holiday, V extends TravelVacation | MountainVacation | BeachVacation> implements VacationManager<T, V> {
    private holidayVacationTypeConnections: Map<T, V> = new Map();

    reserveVacation(holiday: T, vacationType: V): void {
        this.holidayVacationTypeConnections.set(holiday, vacationType);
    }

    listReservations(): string {
        let result: string = '';
        for (const [holiday, vacationType] of this.holidayVacationTypeConnections) {
            result += `${holiday.getInfo()} => ${vacationType}\n`;
        }
        return result.trim();
    }
}

let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));
let holidayManager = new HolidayManager<Holiday, TravelVacation>();
holidayManager.reserveVacation(holiday, TravelVacation.Abroad);
holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
console.log(holidayManager.listReservations());