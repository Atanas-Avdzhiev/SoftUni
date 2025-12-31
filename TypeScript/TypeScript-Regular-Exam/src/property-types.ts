import { ApplyCommission } from "./decorators";
import { IdConstraint, PropertyBase, PropertyType } from "./models";

export abstract class BasePropertyItem implements PropertyBase {

    id: number;
    address: string;
    areaSqM: number;
    readonly type: PropertyType;
    private _salePrice: number;

    constructor(id: number, address: string, areaSqM: number, type: PropertyType, salePrice: number) {
        this.id = id;
        this.address = address;
        this.areaSqM = areaSqM;
        this.type = type;
        this._salePrice = salePrice;
    }

    get baseSalePrice(): number {
        return this._salePrice;
    }

    get finalSalePrice(): number | undefined {
        return undefined;
    }

    abstract getAnnualTax(): number;
}

export class Apartment extends BasePropertyItem {
    floor: number;

    constructor(id: number, address: string, areaSqM: number, floor: number, salePrice: number) {
        super(id, address, areaSqM, PropertyType.Apartment, salePrice);
        this.floor = floor;
    }

    getAnnualTax(): number {
        return (this.areaSqM * 2.5) + (this.floor * 5);
    }
}

export class House extends BasePropertyItem {
    gardenAreaSqM: number;

    constructor(id: number, address: string, areaSqM: number, gardenAreaSqM: number, salePrice: number) {
        super(id, address, areaSqM, PropertyType.House, salePrice);
        this.gardenAreaSqM = gardenAreaSqM;
    }

    @ApplyCommission
    get finalSalePrice(): number {
        return this.baseSalePrice;
    }

    getAnnualTax(): number {
        return (this.areaSqM * 3.0) + (this.gardenAreaSqM * 1.5);
    }
}

export function findItemById<T extends IdConstraint>(array: T[], id: number) {
    return array.find(item => item.id === id);
}