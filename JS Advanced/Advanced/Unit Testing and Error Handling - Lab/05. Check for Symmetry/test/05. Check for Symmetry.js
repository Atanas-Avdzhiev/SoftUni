import { expect } from "chai";
import { isSymmetric } from "../checkForSymmetry.js";

it('Should return true if the array is symmetric', () => {
    const testInput = [1, 2, 3, 2, 1];
    const result = isSymmetric(testInput);
    expect(result).to.be.true;
})

it('Should return false', () => {
    const testInput = [2, 2, 3, 2, 1];
    expect(isSymmetric(testInput)).to.be.false;
    expect(isSymmetric(undefined)).to.be.false;
    expect(isSymmetric(null)).to.be.false;
    expect(isSymmetric({})).to.be.false;
    expect(isSymmetric('')).to.be.false;
    expect(isSymmetric('12321')).to.be.false;
    expect(isSymmetric([1, 2, 3, '2', '1'])).to.be.false;
    expect(isSymmetric(1, 2, 1)).to.be.false;
})

it('Should return true for array with one number', () => {
    expect(isSymmetric([1])).to.be.true;
})

it('Should return true for array with strings', () => {
    expect(isSymmetric(['first', 'second', 'first'])).to.be.true;
})

it('Should return true for empty array', () => {
    expect(isSymmetric([])).to.be.true;
})