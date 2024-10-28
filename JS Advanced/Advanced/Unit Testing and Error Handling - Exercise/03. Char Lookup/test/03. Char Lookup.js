import { expect } from "chai";
import { lookupChar } from "../charLookUp.js";

it('', () => {
    expect(lookupChar('test', 2)).to.be.equal('s');
    expect(lookupChar('test', 0)).to.be.equal('t');
    expect(lookupChar('test', 3)).to.be.equal('t');
})

it('', () => {
    expect(lookupChar('test', [2])).to.be.equal(undefined);
    expect(lookupChar({}, 0)).to.be.equal(undefined);
    expect(lookupChar(5, 'string')).to.be.equal(undefined);
    expect(lookupChar(5, 5)).to.be.equal(undefined);
    expect(lookupChar('string', 'string')).to.be.equal(undefined);
    expect(lookupChar(undefined, undefined)).to.be.equal(undefined);
    expect(lookupChar('string', 0.5)).to.be.equal(undefined);
})

it('', () => {
    expect(lookupChar('test', -1)).to.be.equal("Incorrect index");
    expect(lookupChar('test', 4)).to.be.equal("Incorrect index");
    expect(lookupChar('test', 2000)).to.be.equal("Incorrect index");
    expect(lookupChar('', 0)).to.be.equal("Incorrect index");
})