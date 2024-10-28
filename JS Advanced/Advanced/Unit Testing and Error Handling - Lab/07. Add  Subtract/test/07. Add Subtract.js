import { expect } from "chai";
import { createCalculator } from '../addSubtract.js';

it('', () => {
    const object = createCalculator();
    expect(object.get()).to.equal(0);
});

it('', () => {
    const object = createCalculator();
    expect(object.add(5)).to.equal(undefined);
});

it('', () => {
    const object = createCalculator();
    expect(object.subtract(5)).to.equal(undefined);
});

it('', () => {
    const object = createCalculator();
    expect(object).to.be.an('object');
    expect(object).to.have.property('add');
    expect(object).to.have.property('subtract');
    expect(object).to.have.property('get');
});

it('', () => {
    const object = createCalculator();
    object.add(5);
    expect(object.get()).to.equal(5);
});

it('', () => {
    const object = createCalculator();
    object.subtract(5);
    expect(object.get()).to.equal(-5);
});

it('', () => {
    const object = createCalculator();
    object.add('5');
    expect(object.get()).to.equal(5);
});

it('', () => {
    const object = createCalculator();
    object.subtract('5');
    expect(object.get()).to.equal(-5);
});