import { expect } from "chai";
import { workforceManagement } from "../workforceManagement.js";

describe("workforceManagement Tests", function () {

    describe("", function () {
        it("recruitStaff", function () {
            expect(() => workforceManagement.recruitStaff('string', 'not Developer', 5)).to.throw();
            expect(workforceManagement.recruitStaff('string', 'Developer', 4)).to.equal('string has been successfully recruited for the role of Developer.');
            expect(workforceManagement.recruitStaff('string', 'Developer', 6)).to.equal('string has been successfully recruited for the role of Developer.');
            expect(workforceManagement.recruitStaff('string', 'Developer', 3)).to.equal('string is not suitable for this role.');
            expect(workforceManagement.recruitStaff('string', 'Developer', -3)).to.equal('string is not suitable for this role.');
            expect(() => workforceManagement.recruitStaff('string', 5, 5)).to.throw();
            expect(() => workforceManagement.recruitStaff('string', [], 5)).to.throw();
            expect(() => workforceManagement.recruitStaff('string', {}, 5)).to.throw();
            expect(() => workforceManagement.recruitStaff('string', undefined, 5)).to.throw();
            expect(() => workforceManagement.recruitStaff('string', 'not', 5)).to.throw('We are not currently hiring for this role.');
        });
    });

    describe("", function () {
        it("computeWages", function () {
            expect(() => workforceManagement.computeWages('string')).to.throw();
            expect(() => workforceManagement.computeWages([5])).to.throw();
            expect(() => workforceManagement.computeWages({})).to.throw();
            expect(() => workforceManagement.computeWages(undefined)).to.throw();
            expect(() => workforceManagement.computeWages('5')).to.throw();
            expect(() => workforceManagement.computeWages(-1)).to.throw();
            expect(() => workforceManagement.computeWages(null)).to.throw();
            expect(workforceManagement.computeWages(5)).to.equal(90);
            expect(workforceManagement.computeWages(161)).to.equal(4398);

        });
    });

    describe("", function () {
        it("dismissEmployee", function () {
            expect(() => workforceManagement.dismissEmployee('not array', 5)).to.throw();
            expect(() => workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], 'not number')).to.throw();
            expect(() => workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], 1.5)).to.throw();
            expect(() => workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], -1)).to.throw();
            expect(() => workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], 3)).to.throw();
            expect(() => workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], 4)).to.throw();
            expect(() => workforceManagement.dismissEmployee([], 0)).to.throw();
            expect(() => workforceManagement.dismissEmployee({}, 1)).to.throw();
            expect(() => workforceManagement.dismissEmployee([], 'not number')).to.throw();
            expect(() => workforceManagement.dismissEmployee(undefined, 1)).to.throw();
            expect(() => workforceManagement.dismissEmployee(null, 0)).to.throw();
            expect(workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], 1)).to.equal('Petar, George');
        });
    });

});