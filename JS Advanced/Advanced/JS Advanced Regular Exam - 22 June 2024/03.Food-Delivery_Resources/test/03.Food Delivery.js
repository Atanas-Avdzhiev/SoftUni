import { expect } from "chai";
import { foodDelivery } from "../food delivery.js";

describe("foodDelivery tests", function () {

    describe("getCategory", function () {

        it("", function () {
            expect(foodDelivery.getCategory('Vegan')).to.equal("Dishes that contain no animal products.");
            expect(foodDelivery.getCategory('Vegetarian')).to.equal("Dishes that contain no meat or fish.");
            expect(foodDelivery.getCategory('Gluten-Free')).to.equal("Dishes that contain no gluten.");
            expect(foodDelivery.getCategory('All')).to.equal("All available dishes.");
            expect(() => foodDelivery.getCategory('error')).to.throw(Error, "Invalid Category!");
        });

    });

    describe("addMenuItem", function () {

        it("", function () {
            expect(() => foodDelivery.addMenuItem('error', 6)).to.throw(Error, "Invalid Information!");
            expect(() => foodDelivery.addMenuItem([5, 6, 7], 'string')).to.throw(Error, "Invalid Information!");
            expect(() => foodDelivery.addMenuItem({}, 'string')).to.throw(Error, "Invalid Information!");
            expect(() => foodDelivery.addMenuItem([5, 6, 7], 3)).to.throw(Error, "Invalid Information!");
            expect(() => foodDelivery.addMenuItem([], 10)).to.throw(Error, "Invalid Information!");
            const menuItem = [{ price: 10 }, { price: 5 }, { price: 1 }];
            expect(foodDelivery.addMenuItem(menuItem, 7)).to.equal('There are 2 available menu items matching your criteria!');
            expect(foodDelivery.addMenuItem(menuItem, 5)).to.equal('There are 2 available menu items matching your criteria!');
            const menuItem2 = [{ price: 100 }, { price: 500 }, { price: 10000 }];
            expect(foodDelivery.addMenuItem(menuItem2, 10)).to.equal('There are 0 available menu items matching your criteria!');
        });

    });

    describe("calculateOrderCost", function () {

        it("", function () {
            expect(() => foodDelivery.calculateOrderCost('string', [], true)).to.throw(Error, "Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost([], 5, true)).to.throw(Error, "Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost([], [], 4)).to.throw(Error, "Invalid Information!");
            const shipping = ['standard', 'express', 'standard'];
            const addons = ['sauce', 'beverage', 'sauce'];
            expect(foodDelivery.calculateOrderCost(shipping, addons, true)).to.equal('You spend $14.03 for shipping and addons with a 15% discount!');
            expect(foodDelivery.calculateOrderCost(shipping, addons, false)).to.equal('You spend $16.50 for shipping and addons!');
        });

    });

});