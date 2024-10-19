import { expect } from "chai";
import { petAdoptionAgency } from "../petAdoptionAgency.js";

describe("petAdoptionAgency Tests", function () {

    describe("isPetAvailable", function () {

        it("", function () {
            expect(() => petAdoptionAgency.isPetAvailable(5, 5, true)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable('string', 'string', true)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable('string', 5, 'not boolean')).to.throw('Invalid input');
            expect(petAdoptionAgency.isPetAvailable('string', -5, true)).to.equal('Sorry, there are no string(s) available for adoption at the agency.');
            expect(petAdoptionAgency.isPetAvailable('string', 0, true)).to.equal('Sorry, there are no string(s) available for adoption at the agency.');
            expect(petAdoptionAgency.isPetAvailable('string', 5, true)).to.equal('Great! We have 5 vaccinated string(s) available for adoption at the agency.');
            expect(petAdoptionAgency.isPetAvailable('string', 5, false)).to.equal('Great! We have 5 string(s) available for adoption, but they need vaccination.');
        });

    });

    describe("getRecommendedPets", function () {

        it("", function () {
            expect(() => petAdoptionAgency.getRecommendedPets(5, 'string')).to.throw('Invalid input');
            expect(() => petAdoptionAgency.getRecommendedPets([], 5)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.getRecommendedPets(5, 5)).to.throw('Invalid input');
            const petList = [
                {
                    name: 'Sharo',
                    traits: 'string'
                },
                {
                    name: 'Sharo2',
                    traits: 'string'
                },
                {
                    name: 'Sharo3',
                    traits: 'string2'
                }
            ]
            expect(petAdoptionAgency.getRecommendedPets(petList, 'string3')).to.equal('Sorry, we currently have no recommended pets with the desired traits: string3.');
            expect(petAdoptionAgency.getRecommendedPets(petList, 'string')).to.equal('Recommended pets with the desired traits (string): Sharo, Sharo2');
        });

    });

    describe("adoptPet", function () {

        it("", function () {
            expect(() => petAdoptionAgency.adoptPet(5, 'string')).to.throw('Invalid input');
            expect(() => petAdoptionAgency.adoptPet('string', 5)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.adoptPet(5, 5)).to.throw('Invalid input');
            expect(petAdoptionAgency.adoptPet('string1', 'string2')).to.equal('Congratulations, string2! You have adopted string1 from the agency. Enjoy your time with your new furry friend!');
        });

    });

});