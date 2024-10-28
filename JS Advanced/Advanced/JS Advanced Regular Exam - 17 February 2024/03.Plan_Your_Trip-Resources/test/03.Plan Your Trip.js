import { expect } from "chai";
import { planYourTrip } from "../planYourTrip.js";

describe("planYourTrip Test", function () {

    describe("choosingDestination", function () {

        it("", function () {
            expect(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2025).to.throw(Error, 'Invalid!', 'Expected exact error message'));
            expect(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 'not number').to.throw(Error));
            expect(() => planYourTrip.choosingDestination('Ski Resort', 'not Winter', 2025).to.throw(Error));
            expect(() => planYourTrip.choosingDestination('not Ski Resort', 'Winter', 2025).to.throw(Error));
            expect(() => planYourTrip.choosingDestination('string', 'string', 2025).to.throw(Error));
            expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)).to.equal('Great choice! The Winter is the perfect time to visit the Ski Resort.');
            expect(planYourTrip.choosingDestination('Ski Resort', 'not Winter', 2024)).to.equal('Consider visiting during the Winter for the best experience at the Ski Resort.');
            expect(() => planYourTrip.choosingDestination('not Ski Resort', 'Winter', 2024).to.throw(Error));
            expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', '2024')).to.equal('Great choice! The Winter is the perfect time to visit the Ski Resort.');
        });

        it('should throw an exact error message', () => {
            try {
                planYourTrip.choosingDestination('Ski Resort', 'Winter', 2025)
                throw new Error('Expected an error but did not get one.'); // Fail if no error is thrown
            } catch (error) {
                expect(error).to.be.an.instanceOf(Error);
                expect(error.message).to.equal('Invalid Year!'); // Check for exact message
            }
        });

    });

    describe("exploreOptions", function () {

        it("", function () {
            expect(() => planYourTrip.exploreOptions('not array', 5).to.throw(Error));
            expect(() => planYourTrip.exploreOptions([1, 2, 3], 'not number').to.throw(Error));
            expect(() => planYourTrip.exploreOptions([1, 2, 3], 0.5).to.throw(Error));
            expect(() => planYourTrip.exploreOptions([1, 2, 3], -5).to.throw(Error));
            expect(() => planYourTrip.exploreOptions([1, 2, 3], 3).to.throw(Error));
            expect(() => planYourTrip.exploreOptions([1, 2, 3], 4).to.throw(Error));
            expect(() => planYourTrip.exploreOptions([], 0).to.throw(Error));
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 2)).to.equal('Skiing, Snowboarding');
            expect(planYourTrip.exploreOptions([1], 0)).to.equal('');
            expect(planYourTrip.exploreOptions(["Skiing", "Skiing", "Snowboarding"], 0)).to.equal('Skiing, Snowboarding');
        });

    });

    describe("estimateExpenses", function () {

        it("", function () {
            expect(() => planYourTrip.estimateExpenses('not number', 5).to.throw(Error, 'Invalid Information!'));
            expect(() => planYourTrip.estimateExpenses(5, 'not number').to.throw(Error, 'Invalid Information!'));
            expect(() => planYourTrip.estimateExpenses('not number', []).to.throw(Error, 'Invalid Information!'));
            expect(() => planYourTrip.estimateExpenses(-5, 6).to.throw(Error, 'Invalid Information!'));
            expect(() => planYourTrip.estimateExpenses(5, -6).to.throw(Error, 'Invalid Information!'));
            expect(() => planYourTrip.estimateExpenses(-5, -6).to.throw(Error, 'Invalid Information!'));
            expect(() => planYourTrip.estimateExpenses(0, 6).to.throw(Error, 'Invalid Information!'));
            expect(() => planYourTrip.estimateExpenses(5, 0).to.throw(Error, 'Invalid Information!'));
            expect(() => planYourTrip.estimateExpenses(0, 0).to.throw(Error, 'Invalid Information!'));
            const cost = (2 * 3).toFixed(2);
            const cost2 = (25.42893057854893578934 * 35.859078345709345793457495749).toFixed(2);
            expect(planYourTrip.estimateExpenses(2, 3)).to.equal(`The trip is budget-friendly, estimated cost is $${cost}.`);
            expect(planYourTrip.estimateExpenses(200, 300)).to.equal('The estimated cost for the trip is $60000.00, plan accordingly.');
            expect(planYourTrip.estimateExpenses(10, 50)).to.equal('The trip is budget-friendly, estimated cost is $500.00.');
            expect(planYourTrip.estimateExpenses(2.654654654, 3.65464563)).to.equal('The trip is budget-friendly, estimated cost is $9.70.');
            expect(planYourTrip.estimateExpenses(25.42893057854893578934, 35.859078345709345793457495749)).to.equal(`The estimated cost for the trip is $${cost2}, plan accordingly.`);

            expect(() => { planYourTrip.estimateExpenses({}, 5) }).to.throw('Invalid Information!');
            expect(() => { planYourTrip.estimateExpenses(5, {}) }).to.throw('Invalid Information!');
        });

    });

});