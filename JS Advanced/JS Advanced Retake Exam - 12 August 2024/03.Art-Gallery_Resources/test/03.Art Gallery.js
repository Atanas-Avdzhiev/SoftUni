import { expect } from "chai";
import { artGallery } from "../artGallery.js";

describe("artGallery tests", function () {

    describe("addArtwork", function () {

        it("", function () {
            expect(() => artGallery.addArtwork(5, [], '')).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.addArtwork('', [], '')).to.throw(Error, "Invalid Dimensions!");
            expect(() => artGallery.addArtwork('', '', '')).to.throw(Error, "Invalid Dimensions!");
            expect(() => artGallery.addArtwork('', [], 5)).to.throw(Error, "Invalid Information!");
            expect(() => artGallery.addArtwork(true, [], 5)).to.throw(Error, "Invalid Information!");
            expect(() => artGallery.addArtwork('valid', '30 x 40', 'invalid')).to.throw(Error, "This artist is not allowed in the gallery!");
            expect(artGallery.addArtwork('valid', '30 x 40', 'Van Gogh')).to.equal("Artwork added successfully: 'valid' by Van Gogh with dimensions 30 x 40.");
        });

    });

    describe("calculateCosts", function () {

        it("", function () {
            expect(() => artGallery.calculateCosts('string', 5, true)).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.calculateCosts(5, 'string', true)).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.calculateCosts(6, 5, 'string')).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.calculateCosts(-1, 5, true)).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.calculateCosts(5, -1, true)).to.throw(Error, 'Invalid Information!');
            expect(artGallery.calculateCosts(10, 10, true)).to.equal("Exhibition and insurance costs are 18$, reduced by 10% with the help of a donation from your sponsor.");
            expect(artGallery.calculateCosts(10, 10, false)).to.equal("Exhibition and insurance costs are 20$.");
        });

    });

    describe("organizeExhibits", function () {

        it("", function () {
            expect(() => artGallery.organizeExhibits('string', 5)).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.organizeExhibits(5, 'string')).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.organizeExhibits(0, 5)).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.organizeExhibits(-1, 5)).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.organizeExhibits(5, 0)).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.organizeExhibits(5, -1)).to.throw(Error, 'Invalid Information!');
            expect(artGallery.organizeExhibits(10, 10)).to.equal("There are only 1 artworks in each display space, you can add more artworks.");
            expect(artGallery.organizeExhibits(50, 10)).to.equal("You have 10 display spaces with 5 artworks in each space.");
            expect(artGallery.organizeExhibits(19, 10)).to.equal("There are only 1 artworks in each display space, you can add more artworks.");
        });

    });

});