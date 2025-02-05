import { Schema, model, Types } from 'mongoose';

const recipeSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [2, 'Title must be at least 2 characters long!']
    },
    ingredients: {
        type: String,
        required: [true, 'Ingredients is required!'],
        minLength: [10, 'Ingredients must be at least 10 characters long!'],
        maxLength: [200, 'Ingredients must be at maximum 200 characters long!']
    },
    instructions: {
        type: String,
        required: [true, 'Instructions is required!'],
        minLength: [10, 'Instructions must be at least 10 characters long!'],
    },
    description: {
        type: String,
        required: [true, 'Description  is required!'],
        minLength: [10, 'Description must be at least 10 characters long!'],
        maxLength: [100, 'Description must be at maximum 100 characters long!']
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\/.+/, 'Image should start with http:// or https://']
    },
    recommendList: [{
        type: Types.ObjectId,
        ref: 'User'

    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Recipe = model('Recipe', recipeSchema);

export default Recipe;