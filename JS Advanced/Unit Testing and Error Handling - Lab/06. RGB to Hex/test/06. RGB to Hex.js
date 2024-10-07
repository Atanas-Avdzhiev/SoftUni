import { expect } from "chai";
import { rgbToHexColor } from '../rgb-to-hex.js';

it('should return ADD8E6', () => {
    expect(rgbToHexColor(173, 216, 230)).to.equal('#ADD8E6');
});

it('should return FFFFFF ', () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
});

it('should return 000000', () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
});

it('should return undefined', () => {
    expect(rgbToHexColor(2000, 1, 1)).to.equal(undefined);
});

it('should return undefined', () => {
    expect(rgbToHexColor(1, 2000, 1)).to.equal(undefined);
});

it('should return undefined', () => {
    expect(rgbToHexColor(1, 1, 2000)).to.equal(undefined);
});

it('should return undefined', () => {
    expect(rgbToHexColor(1.5, 1.2, 5.2)).to.equal(undefined);
});

it('should return undefined', () => {
    expect(rgbToHexColor(-1, 1, 2000)).to.equal(undefined);
});

it('should return undefined', () => {
    expect(rgbToHexColor(-1, -1, -2)).to.equal(undefined);
});

it('should return undefined', () => {
    expect(rgbToHexColor(-1.2, -1.5, -2.5)).to.equal(undefined);
});

it('should return undefined', () => {
    expect(rgbToHexColor(-1.2, -1.5, -2000.5)).to.equal(undefined);
});