import { expect } from "chai";
import { streamingServiceSelector } from "../streamingServiceSelector.js";

describe("streamingServiceSelector tests", function () {


    describe("selectingContent", function () {

        it("", function () {
            const supportedGenres = ["Action", "Comedy", "Drama", "Thriller", "Horror", "Romance", "Sci-Fi"];
            expect(() => streamingServiceSelector.selectingContent(5, 'string', 'string')).to.throw(`We currently support these genres: ${supportedGenres.join(", ")}.`);
            expect(() => streamingServiceSelector.selectingContent('string', 5, 'string')).to.throw(`We currently support these genres: ${supportedGenres.join(", ")}.`);
            expect(() => streamingServiceSelector.selectingContent('string', 'string', 5)).to.throw(`We currently support these genres: ${supportedGenres.join(", ")}.`);

            expect(() => streamingServiceSelector.selectingContent('not Movie', 'string', 'Action')).to.throw(`We currently only support 'Movie' or 'TV Show' types.`);
            expect(() => streamingServiceSelector.selectingContent('not TV Show', 'string', 'Action')).to.throw(`We currently only support 'Movie' or 'TV Show' types.`);
            expect(() => streamingServiceSelector.selectingContent('invalid', 'string', 'Comedy')).to.throw(`We currently only support 'Movie' or 'TV Show' types.`);
            expect(() => streamingServiceSelector.selectingContent('invalid', 'string', 'Drama')).to.throw(`We currently only support 'Movie' or 'TV Show' types.`);
            expect(() => streamingServiceSelector.selectingContent('invalid', 'string', 'Thriller')).to.throw(`We currently only support 'Movie' or 'TV Show' types.`);
            expect(() => streamingServiceSelector.selectingContent('invalid', 'string', 'Horror')).to.throw(`We currently only support 'Movie' or 'TV Show' types.`);
            expect(() => streamingServiceSelector.selectingContent('invalid', 'string', 'Romance')).to.throw(`We currently only support 'Movie' or 'TV Show' types.`);
            expect(() => streamingServiceSelector.selectingContent('invalid', 'string', 'Sci-Fi')).to.throw(`We currently only support 'Movie' or 'TV Show' types.`);

            expect(streamingServiceSelector.selectingContent('Movie', 'Netflix', 'Action')).to.equal(`You can watch this Action Movie on Netflix. Enjoy your Action-filled experience!`);
            expect(streamingServiceSelector.selectingContent('Movie', 'platform', 'Comedy')).to.equal(`You can watch this Comedy Movie on platform. Enjoy your Comedy-filled experience!`);
            expect(streamingServiceSelector.selectingContent('Movie', 'platform', 'Drama')).to.equal(`You can watch this Drama Movie on platform. Enjoy your Drama-filled experience!`);
            expect(streamingServiceSelector.selectingContent('Movie', 'platform', 'Thriller')).to.equal(`You can watch this Thriller Movie on platform. Enjoy your Thriller-filled experience!`);
            expect(streamingServiceSelector.selectingContent('Movie', 'platform', 'Horror')).to.equal(`You can watch this Horror Movie on platform. Enjoy your Horror-filled experience!`);
            expect(streamingServiceSelector.selectingContent('Movie', 'platform', 'Romance')).to.equal(`You can watch this Romance Movie on platform. Enjoy your Romance-filled experience!`);
            expect(streamingServiceSelector.selectingContent('Movie', 'platform', 'Sci-Fi')).to.equal(`You can watch this Sci-Fi Movie on platform. Enjoy your Sci-Fi-filled experience!`);

            expect(streamingServiceSelector.selectingContent('TV Show', 'platform', 'Action')).to.equal(`You can watch this Action TV Show on platform. Enjoy your Action-filled experience!`);
            expect(streamingServiceSelector.selectingContent('TV Show', 'platform', 'Comedy')).to.equal(`You can watch this Comedy TV Show on platform. Enjoy your Comedy-filled experience!`);
            expect(streamingServiceSelector.selectingContent('TV Show', 'platform', 'Drama')).to.equal(`You can watch this Drama TV Show on platform. Enjoy your Drama-filled experience!`);
            expect(streamingServiceSelector.selectingContent('TV Show', 'platform', 'Thriller')).to.equal(`You can watch this Thriller TV Show on platform. Enjoy your Thriller-filled experience!`);
            expect(streamingServiceSelector.selectingContent('TV Show', 'platform', 'Horror')).to.equal(`You can watch this Horror TV Show on platform. Enjoy your Horror-filled experience!`);
            expect(streamingServiceSelector.selectingContent('TV Show', 'platform', 'Romance')).to.equal(`You can watch this Romance TV Show on platform. Enjoy your Romance-filled experience!`);
            expect(streamingServiceSelector.selectingContent('TV Show', 'platform', 'Sci-Fi')).to.equal(`You can watch this Sci-Fi TV Show on platform. Enjoy your Sci-Fi-filled experience!`);
        });

    });

    describe("availablePlatforms", function () {

        it("", function () {
            expect(() => streamingServiceSelector.availablePlatforms('not array', 5)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms([], 'not number')).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms([1], 1)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms([], -1)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms([1, 2, 3], 1.5)).to.throw('Invalid platform selection.');
            const platforms = ["Netflix", "HBO", "Disney+"];
            expect(streamingServiceSelector.availablePlatforms(platforms, 1)).to.equal('Other available platforms are: Netflix, Disney+.');
            expect(streamingServiceSelector.availablePlatforms(['HBO'], 0)).to.equal('Other available platforms are: .');
        });

    });


    describe("contentRating", function () {

        it("", function () {
            expect(() => streamingServiceSelector.contentRating('not a number', 5)).to.throw('Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(5, 'not a number')).to.throw('Invalid runtime or rating.');
            expect(streamingServiceSelector.contentRating(60, 7)).to.equal('This content is highly rated (7/10) and has a runtime of 1.00 hours. Enjoy your watch!');
            expect(streamingServiceSelector.contentRating(30, 7)).to.equal('This content is highly rated (7/10) and has a runtime of 0.50 hours. Enjoy your watch!');
            expect(streamingServiceSelector.contentRating(60, 5)).to.equal('This content has a lower rating (5/10) and runs for 1.00 hours. You might want to check reviews first.');
            expect(streamingServiceSelector.contentRating(60, 10)).to.equal('This content is highly rated (10/10) and has a runtime of 1.00 hours. Enjoy your watch!');
            expect(streamingServiceSelector.contentRating(60, 0)).to.equal('This content has a lower rating (0/10) and runs for 1.00 hours. You might want to check reviews first.');
            expect(streamingServiceSelector.contentRating(60, 1)).to.equal('This content has a lower rating (1/10) and runs for 1.00 hours. You might want to check reviews first.');
            expect(streamingServiceSelector.contentRating(60, 2)).to.equal('This content has a lower rating (2/10) and runs for 1.00 hours. You might want to check reviews first.');
            expect(streamingServiceSelector.contentRating(60, 3)).to.equal('This content has a lower rating (3/10) and runs for 1.00 hours. You might want to check reviews first.');
            expect(streamingServiceSelector.contentRating(60, 4)).to.equal('This content has a lower rating (4/10) and runs for 1.00 hours. You might want to check reviews first.');
            expect(streamingServiceSelector.contentRating(60, 5)).to.equal('This content has a lower rating (5/10) and runs for 1.00 hours. You might want to check reviews first.');
            expect(streamingServiceSelector.contentRating(60, 6)).to.equal('This content has a lower rating (6/10) and runs for 1.00 hours. You might want to check reviews first.');
            expect(streamingServiceSelector.contentRating(60, 8)).to.equal('This content is highly rated (8/10) and has a runtime of 1.00 hours. Enjoy your watch!');
            expect(streamingServiceSelector.contentRating(60, 9)).to.equal('This content is highly rated (9/10) and has a runtime of 1.00 hours. Enjoy your watch!');
            expect(streamingServiceSelector.contentRating(10, 5.5)).to.equal('This content has a lower rating (5.5/10) and runs for 0.17 hours. You might want to check reviews first.');
            expect(streamingServiceSelector.contentRating(60, 9.5)).to.equal('This content is highly rated (9.5/10) and has a runtime of 1.00 hours. Enjoy your watch!');
            expect(streamingServiceSelector.contentRating(578934754, 7)).to.equal('This content is highly rated (7/10) and has a runtime of 9648912.57 hours. Enjoy your watch!');
            expect(streamingServiceSelector.contentRating(578934754, 6)).to.equal('This content has a lower rating (6/10) and runs for 9648912.57 hours. You might want to check reviews first.');

        });

    });
});