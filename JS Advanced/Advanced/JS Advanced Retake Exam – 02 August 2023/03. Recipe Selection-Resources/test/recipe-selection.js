import { expect } from "chai";
import { recipeSelection } from "../recipeSelection.js";

describe('Tests', function () {
    it('isTypeSuitable', () => {
        expect(() => recipeSelection.isTypeSuitable(5, 'string')).to.throw(Error, 'Invalid input');
        expect(() => recipeSelection.isTypeSuitable('string', 1)).to.throw(Error, 'Invalid input');
        expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal("This recipe is not suitable for vegetarians");
        expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal("This recipe is not suitable for vegans");
        expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal("This recipe is not suitable for vegans");
        expect(recipeSelection.isTypeSuitable('Valid', 'Valid')).to.equal("This recipe is suitable for your dietary restriction");
    })

    it('isItAffordable', () => {
        expect(() => recipeSelection.isItAffordable(5, 'string')).to.throw(Error, 'Invalid input');
        expect(() => recipeSelection.isItAffordable('string', 1)).to.throw(Error, 'Invalid input');
        expect(recipeSelection.isItAffordable(10, 8)).to.equal("You don't have enough budget to afford this recipe");
        expect(recipeSelection.isItAffordable(10, 80)).to.equal(`Recipe ingredients bought. You have 70$ left`);
    })

    it('getRecipesByCategory', () => {
        expect(() => recipeSelection.getRecipesByCategory(5, 'string')).to.throw(Error, 'Invalid input');
        expect(() => recipeSelection.getRecipesByCategory(['string'], 1)).to.throw(Error, 'Invalid input');

        const array = [{ title: "Spicy Tofu Stir-Fry", category: "Asian" },
        { title: "Spicy Tofu Stir-Fry 2", category: "Asian" },
        { title: "Spicy Tofu Stir-Fry 3", category: "White" }];
        expect(recipeSelection.getRecipesByCategory(array, "Asian")).to.deep.equal(['Spicy Tofu Stir-Fry', 'Spicy Tofu Stir-Fry 2']);
        expect(recipeSelection.getRecipesByCategory([], "Asian")).to.deep.equal([]);
        expect(recipeSelection.getRecipesByCategory([{}], "Asian")).to.deep.equal([]);
        const array2 = [{ title: "Spicy Tofu Stir-Fry", category: "Asian" },
        { title: "Spicy Tofu Stir-Fry 2", category: "Asian" },
        { title: "Spicy Tofu Stir-Fry 3", category: "Asian" }];
        expect(recipeSelection.getRecipesByCategory(array2, "Asian")).to.deep.equal(['Spicy Tofu Stir-Fry', 'Spicy Tofu Stir-Fry 2', 'Spicy Tofu Stir-Fry 3']);
        expect(recipeSelection.getRecipesByCategory(array2, "Black")).to.deep.equal([]);
    })
})