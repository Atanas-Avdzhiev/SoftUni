import { expect } from "chai";
import { findNewApartment } from "../findApartment.js";

describe("findNewApartment Tests", function () {

    describe("isGoodLocation", function () {

        it("", function () {
            expect(() => findNewApartment.isGoodLocation(5, true)).to.throw('Invalid input!');
            expect(() => findNewApartment.isGoodLocation('string', 'not boolean')).to.throw('Invalid input!');
            expect(() => findNewApartment.isGoodLocation(5, 'not boolean')).to.throw('Invalid input!');
            expect(findNewApartment.isGoodLocation('string', true)).to.equal('This location is not suitable for you.');
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.');
        });

    });

    describe("isLargeEnough", function () {

        it("", function () {
            expect(() => findNewApartment.isLargeEnough('not array', 5)).to.throw('Invalid input!');
            expect(() => findNewApartment.isLargeEnough([1, 2, 3], 'not number')).to.throw('Invalid input!');
            expect(() => findNewApartment.isLargeEnough([], 5)).to.throw('Invalid input!');
            expect(findNewApartment.isLargeEnough([10, 20, 30], 20)).to.equal('20, 30');
        });

    });

    describe("isItAffordable", function () {

        it("", function () {
            expect(() => findNewApartment.isItAffordable('not number', 5)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(5, 'not number')).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable('not number', 'not number')).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(0, 5)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(5, 0)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(0, 0)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(-5, 5)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(5, -5)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(-5, -5)).to.throw('Invalid input!');
            expect(findNewApartment.isItAffordable(50, 10)).to.equal("You don't have enough money for this house!");
            expect(findNewApartment.isItAffordable(10, 10)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(10, 50)).to.equal("You can afford this home!");

        });

    });

});