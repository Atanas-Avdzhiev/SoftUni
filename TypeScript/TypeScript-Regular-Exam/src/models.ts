export enum PropertyType {
    "Apartment",
    "House",
    "LandPlot"
}

export interface PropertyBase {
    id: number;
    address: string;
    areaSqM: number;
    type: PropertyType;
}

export interface Client {
    name: string;
    phone: string;
}

export interface IdConstraint {
    id: number;
}