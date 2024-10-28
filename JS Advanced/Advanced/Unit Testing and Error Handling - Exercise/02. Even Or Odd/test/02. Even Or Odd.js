import { expect } from "chai";
import { isOddOrEven } from "../isOddOrEven.js";

it('', () => {
    expect(isOddOrEven(10)).to.be.equal(undefined);
    expect(isOddOrEven('odd')).to.be.equal('odd');
    expect(isOddOrEven('even')).to.be.equal('even');
})

it('', () => {
    expect(isOddOrEven(undefined)).to.be.equal(undefined);
    expect(isOddOrEven(null)).to.be.equal(undefined);
})

it('', () => {
    expect(isOddOrEven([])).to.be.equal(undefined);
    expect(isOddOrEven({})).to.be.equal(undefined);
})