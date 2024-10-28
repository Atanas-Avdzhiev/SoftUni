import { expect } from "chai";
import { PaymentPackage } from "../PaymentPackage.js";

it('test', () => {
    expect(() => new PaymentPackage('Testing')).to.throw(Error, 'Value must be a non-negative number');
    expect(() => new PaymentPackage()).to.throw(Error, 'Name must be a non-empty string');
    expect(() => new PaymentPackage('Testing', -1)).to.throw(Error, 'Value must be a non-negative number');
    expect(() => new PaymentPackage('', -1)).to.throw(Error, 'Name must be a non-empty string');
    expect(() => new PaymentPackage(5, -1)).to.throw(Error, 'Name must be a non-empty string');
    expect(new PaymentPackage('HR Services', 1500).toString()).to.be.equal('Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
    expect(() => new PaymentPackage('HR Services', 1500).active = null).to.throw(Error, 'Active status must be a boolean');
    expect((new PaymentPackage('HR Services', 1500).active = false).toString()).to.be.equal('false');
    const test = new PaymentPackage('HR Services', 1500);
    test.active = false;
    expect(test.toString()).to.be.equal('Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
    expect(() => test.active = null).to.throw(Error, 'Active status must be a boolean');
    expect(() => test.active = 5).to.throw(Error, 'Active status must be a boolean');
    expect(() => test.active = 'test').to.throw(Error, 'Active status must be a boolean');
    expect(() => test.VAT = 'string').to.throw(Error, 'VAT must be a non-negative number');
    expect(() => test.VAT = -1).to.throw(Error, 'VAT must be a non-negative number');
    test.VAT = 100;
    expect(test.toString()).to.be.equal('Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 100%): 3000');
    expect(() => test.value = 'string').to.throw(Error, 'Value must be a non-negative number');
    expect(() => test.value = -5).to.throw(Error, 'Value must be a non-negative number');
    expect(() => test.value = '').to.throw(Error, 'Value must be a non-negative number');
    test.value = 5;
    expect(test.toString()).to.be.equal('Package: HR Services (inactive)\n- Value (excl. VAT): 5\n- Value (VAT 100%): 10');
    test.value = 0;
    expect(test.toString()).to.be.equal('Package: HR Services (inactive)\n- Value (excl. VAT): 0\n- Value (VAT 100%): 0');
    expect(() => test.name = 5).to.throw(Error, 'Name must be a non-empty string');
    expect(() => test.name = '').to.throw(Error, 'Name must be a non-empty string');
    test.name = 'Name';
    expect(test.toString()).to.be.equal('Package: Name (inactive)\n- Value (excl. VAT): 0\n- Value (VAT 100%): 0');
    const test2 = new PaymentPackage('Default', 1);
    expect(test2._name).to.be.equal('Default');
    expect(test2.name).to.be.equal('Default');
    expect(test2.value).to.be.equal(1);
    expect(test2._value).to.be.equal(1);
    expect(test2.VAT).to.be.equal(20);
    expect(test2._VAT).to.be.equal(20);
    expect(test2.active).to.be.equal(true);
    expect(test2._active).to.be.equal(true);
})
it('test name', () => {
    let test3 = new PaymentPackage('Default', 1);
    expect(test3._name).to.be.equal('Default');
    expect(test3.name).to.be.equal('Default');
})
it('test value', () => {
    let test3 = new PaymentPackage('Default', 1);
    expect(test3.value).to.be.equal(1);
    expect(test3._value).to.be.equal(1);
})
it('test VAT', () => {
    let test3 = new PaymentPackage('Default', 1);
    expect(test3.VAT).to.be.equal(20);
    expect(test3._VAT).to.be.equal(20);
})
it('test active', () => {
    let test3 = new PaymentPackage('Default', 1);
    expect(test3.active).to.be.equal(true);
    expect(test3._active).to.be.equal(true);
})