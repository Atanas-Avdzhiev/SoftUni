import { expect } from "chai";
import { weddingDay } from "../weddingDay.js";

describe("weddingDay Tests", function () {

    describe("", function () {

        it("pickVenue", function () {
            expect(() => weddingDay.pickVenue('not number', 5, 'string')).to.throw('Invalid Information!');
            expect(() => weddingDay.pickVenue(5, 'not number', 'string')).to.throw('Invalid Information!');
            expect(() => weddingDay.pickVenue(5, 5, 5)).to.throw('Invalid Information!');
            expect(() => weddingDay.pickVenue(5, 5, '')).to.throw('Invalid Information!');
            expect(() => weddingDay.pickVenue(5, 5, 'not Varna')).to.throw('The location of this venue is not in the correct area!');
            expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal('This venue meets the requirements, with capacity of 150 guests and 120$ cover.');
            expect(weddingDay.pickVenue(149, 120, 'Varna')).to.equal('This venue does not meet your requirements!');
            expect(weddingDay.pickVenue(150, 121, 'Varna')).to.equal('This venue does not meet your requirements!');
            expect(weddingDay.pickVenue(149, 121, 'Varna')).to.equal('This venue does not meet your requirements!');
        });

    });

    describe("otherSpendings", function () {

        it("", function () {
            expect(() => weddingDay.otherSpendings('not array', [], true)).to.throw('Invalid Information!');
            expect(() => weddingDay.otherSpendings([], 'not array', true)).to.throw('Invalid Information!');
            expect(() => weddingDay.otherSpendings([], [], 'not boolean')).to.throw('Invalid Information!');
            expect(weddingDay.otherSpendings([], [], true)).to.equal('You spend 0$ for wedding decoration and photography with 15% discount!');
            expect(weddingDay.otherSpendings([], [], false)).to.equal('You spend 0$ for wedding decoration and photography!');
            const weddingDecoration = ['flowers', 'Fabric drapes and curtains', 'flowers'];
            const photography = ['pictures', 'video', 'pictures'];
            expect(weddingDay.otherSpendings(weddingDecoration, photography, true)).to.equal('You spend 3485$ for wedding decoration and photography with 15% discount!');
            expect(weddingDay.otherSpendings(weddingDecoration, photography, false)).to.equal('You spend 4100$ for wedding decoration and photography!');
        });

    });

    describe("tableDistribution", function () {

        it("", function () {
            expect(() => weddingDay.tableDistribution('not number', 5)).to.throw('Invalid Information!');
            expect(() => weddingDay.tableDistribution(5, 'not number')).to.throw('Invalid Information!');
            expect(() => weddingDay.tableDistribution('not number', -5)).to.throw('Invalid Information!');
            expect(() => weddingDay.tableDistribution(-5, 'not number')).to.throw('Invalid Information!');
            expect(() => weddingDay.tableDistribution(-5, 5)).to.throw('Invalid Information!');
            expect(() => weddingDay.tableDistribution(5, -5)).to.throw('Invalid Information!');
            expect(() => weddingDay.tableDistribution(0, 5)).to.throw('Invalid Information!');
            expect(() => weddingDay.tableDistribution(5, 0)).to.throw('Invalid Information!');
            expect(() => weddingDay.tableDistribution(-5, -5)).to.throw('Invalid Information!');
            expect(() => weddingDay.tableDistribution(0, 0)).to.throw('Invalid Information!');
            expect(weddingDay.tableDistribution(9, 3)).to.equal('There is only 3 people on every table, you can join some tables.');
            expect(weddingDay.tableDistribution(10, 3)).to.equal('There is only 3 people on every table, you can join some tables.');
            expect(weddingDay.tableDistribution(11, 3)).to.equal('There is only 4 people on every table, you can join some tables.');
            expect(weddingDay.tableDistribution(12, 3)).to.equal('There is only 4 people on every table, you can join some tables.');
            expect(weddingDay.tableDistribution(60, 6)).to.equal('You have 6 tables with 10 guests on table.');
            expect(weddingDay.tableDistribution(60, 9.5)).to.equal('You have 9.5 tables with 6 guests on table.');
            expect(weddingDay.tableDistribution(1, 1)).to.equal('There is only 1 people on every table, you can join some tables.');
            expect(weddingDay.tableDistribution(100, 1)).to.equal('You have 1 tables with 100 guests on table.');
        });

    });

});