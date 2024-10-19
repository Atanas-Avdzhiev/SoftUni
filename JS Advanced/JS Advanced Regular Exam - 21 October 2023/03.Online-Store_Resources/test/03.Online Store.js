import { expect } from "chai";
import { onlineStore } from "../onlineStore.js";

describe("Tests …", function () {

    describe("isProductAvailable", function () {

        it("", function () {
            expect(() => onlineStore.isProductAvailable(5, 6)).to.throw(Error, "Invalid input.");
            expect(() => onlineStore.isProductAvailable(5, 'string')).to.throw(Error, "Invalid input.");
            expect(() => onlineStore.isProductAvailable('string', 'string2')).to.throw(Error, "Invalid input.");
            expect(onlineStore.isProductAvailable('string', 5)).to.equal('Great! string is available for purchase.');
            expect(onlineStore.isProductAvailable('string2', -6)).to.equal('Sorry, string2 is currently out of stock.');
        });
    });

    describe("canAffordProduct", function () {

        it("", function () {
            expect(() => onlineStore.canAffordProduct('string', 6)).to.throw(Error, "Invalid input.");
            expect(() => onlineStore.canAffordProduct(5, 'string')).to.throw(Error, "Invalid input.");
            expect(() => onlineStore.canAffordProduct('string', 'string2')).to.throw(Error, "Invalid input.");
            expect(onlineStore.canAffordProduct(4, 5)).to.equal('Product purchased. Your remaining balance is $1.');
            expect(onlineStore.canAffordProduct(5, 3)).to.equal("You don't have sufficient funds to buy this product.");
            expect(onlineStore.canAffordProduct(0, 0)).to.equal("Product purchased. Your remaining balance is $0.");
        });
    });

    describe("getRecommendedProducts", function () {

        it("", function () {
            expect(() => onlineStore.getRecommendedProducts(5, 'string')).to.throw(Error, "Invalid input.");
            expect(() => onlineStore.getRecommendedProducts([], 5)).to.throw(Error, "Invalid input.");
            expect(() => onlineStore.getRecommendedProducts('string', [])).to.throw(Error, "Invalid input.");
            expect(onlineStore.getRecommendedProducts([], 'string')).to.equal('Sorry, we currently have no recommended products in the string category.');
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }], 'Photography')).to.equal("Recommended products in the Photography category: Camera");
            
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" },
            { name: "Camera2", category: "Photography" },
            { name: "Camera3", category: "Photography2" }
            ], 'Photography')).to.equal("Recommended products in the Photography category: Camera, Camera2");

            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" },
                { name: "Camera2", category: "Photography" },
                { name: "Camera3", category: "Photography" }
                ], 'Photography')).to.equal("Recommended products in the Photography category: Camera, Camera2, Camera3");

                expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography2" },
                    { name: "Camera2", category: "Photography2" },
                    { name: "Camera3", category: "Photography2" }
                    ], 'Photography')).to.equal("Sorry, we currently have no recommended products in the Photography category.");
        });
    });
});