import { expect } from "chai";
import { mathEnforcer } from "../mathEnforcer.js";

it('', () => {
    expect(mathEnforcer.addFive(1)).to.be.equal(6);
    expect(mathEnforcer.addFive('1')).to.be.equal(undefined);
    expect(mathEnforcer.addFive(['1'])).to.be.equal(undefined);
    expect(mathEnforcer.addFive({})).to.be.equal(undefined);
    expect(mathEnforcer.addFive(undefined)).to.be.equal(undefined);
    expect(mathEnforcer.addFive(0.5)).closeTo(5.5, 0.01);
    expect(mathEnforcer.addFive(-0.5)).closeTo(4.5, 0.01);
    expect(mathEnforcer.addFive(-55)).to.be.equal(-50);
})

it('', () => {
    expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
    expect(mathEnforcer.subtractTen(-20)).to.be.equal(-30);
    expect(mathEnforcer.subtractTen(1)).to.be.equal(-9);
    expect(mathEnforcer.subtractTen('1')).to.be.equal(undefined);
    expect(mathEnforcer.subtractTen(['1'])).to.be.equal(undefined);
    expect(mathEnforcer.subtractTen({})).to.be.equal(undefined);
    expect(mathEnforcer.subtractTen(undefined)).to.be.equal(undefined);
    expect(mathEnforcer.subtractTen(0.5)).closeTo(-9.5, 0.01);
})

it('', () => {
    expect(mathEnforcer.sum(20, 10)).to.be.equal(30);
    expect(mathEnforcer.sum(1, -100)).to.be.equal(-99);
    expect(mathEnforcer.sum(-1, -100)).to.be.equal(-101);
    expect(mathEnforcer.sum('1', 5)).to.be.equal(undefined);
    expect(mathEnforcer.sum(5, ['1'])).to.be.equal(undefined);
    expect(mathEnforcer.sum({}, [])).to.be.equal(undefined);
    expect(mathEnforcer.sum(undefined, undefined)).to.be.equal(undefined);
    expect(mathEnforcer.sum('string', 5)).to.be.equal(undefined);
    expect(mathEnforcer.sum(5, 'string')).to.be.equal(undefined);
    expect(mathEnforcer.sum('5', '5')).to.be.equal(undefined);
    expect(mathEnforcer.sum(0.5, 1.5)).closeTo(2, 0.01);
    expect(mathEnforcer.sum(-0.5, -1.5)).closeTo(-2, 0.01);
})