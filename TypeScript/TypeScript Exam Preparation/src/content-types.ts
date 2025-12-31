import { BaseContent, ContentType, IdConstraint } from "./models";

export abstract class DetailedContent implements BaseContent {
    readonly id: number;
    readonly title: string;
    readonly releaseDate: Date;
    private readonly _type: ContentType;

    constructor(id: number, title: string, releaseDate: Date, type: ContentType) {
        this.id = id;
        this.title = title;
        this.releaseDate = releaseDate;
        this._type = type;
    }

    get type() {
        return this._type;
    }

    set type(_: ContentType) {
        throw new Error('Content type is immutable');
    }

    abstract getDetails(): string;
}

export class Movie extends DetailedContent {
    readonly director: string;

    constructor(id: number, title: string, releaseDate: Date, director: string) {
        super(id, title, releaseDate, ContentType.Movie);
        this.director = director;
    }

    getDetails(): string {
        return `[MOVIE] "${this.title}" directed by ${this.director} (Released: ${formatDate(this.releaseDate)})`;
    }
}

export class Series extends DetailedContent {
    readonly platformUrl: string;

    constructor(id: number, title: string, releaseDate: Date, platformUrl: string) {
        super(id, title, releaseDate, ContentType.Series);
        this.platformUrl = platformUrl;
    }

    getDetails(): string {
        return `[SERIES] "${this.title}" (Released: ${formatDate(this.releaseDate)}), available at: ${this.platformUrl}`;
    }
}

export function findItemById<T extends IdConstraint>(array: T[], id: number) {
    return array.find(item => item.id === id);
}

function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());

    return `${day}/${month}/${year}`;
}