import { Schema, model, Types } from 'mongoose';

const cosmeticSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name must be at least 2 characters long!']
    },
    skin: {
        type: String,
        required: [true, 'Skin is required!'],
        minLength: [10, 'Skin must be at least 10 characters long!'],
        maxLength: [100, 'Skin must be maximum 100 characters long!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [20, 'Description must be at least 20 characters long!'],
        maxLength: [200, 'Description must be maximum 200 characters long!']
    },
    ingredients: {
        type: String,
        required: [true, 'Ingredients  is required!'],
        minLength: [2, 'Ingredients must be at least 2 characters long!'],
        maxLength: [50, 'Ingredients must be maximum 50 characters long!']
    },
    benefits: {
        type: String,
        required: [true, 'Benefits  is required!'],
        minLength: [10, 'Benefits must be at least 10 characters long!'],
        maxLength: [100, 'Benefits must be maximum 100 characters long!']
    },
    price: {
        type: Number,
        required: [true, 'Price  is required!'],
        min: [1, 'Price must be a positive number!']
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\//, 'Image should start with http:// or https://']
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

const Cosmetic = model('Cosmetic', cosmeticSchema);

export default Cosmetic;