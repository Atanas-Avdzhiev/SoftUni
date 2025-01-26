import { Schema, model, Types } from 'mongoose';

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [5, 'Title must be at least 5 characters long!'],
        validate: [/^[a-zA-Z0-9 ]+$/, 'Title can contain only letters and digits!']
    },
    category: {
        type: String,
        required: [true, 'Category is required!'],
    },
    genre: {
        type: String,
        required: [true, 'Genre is required!'],
        lowercase: true,
        minLength: [5, 'Genre must be at least 5 characters long!'],
        validate: [/^[a-zA-Z0-9 ]+$/, 'Genre can contain only letters and digits!']
    },
    director: {
        type: String,
        required: [true, 'Director is required!'],
        minLength: [5, 'Director must be at least 5 characters long!'],
        validate: [/^[a-zA-Z0-9 ]+$/, 'Director can contain only letters and digits!']
    },
    year: {
        type: Number,
        required: [true, 'Year is required!'],
        min: [1900, 'Year must be between 1900 and 2025'],
        max: [2025, 'Year must be between 1900 and 2025']
    },
    rating: {
        type: Number,
        required: [true, 'Rating is required!'],
        min: [1, 'Rating must be between 1 and 5'],
        max: [5, 'Rating must be between 1 and 5']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [20, 'Description must be at least 20 characters long!']
    },
    imageURL: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\/.+/, 'Wrong image format!']
    },
    cast: [{
        _id: false,
        character: {
            type: String,
            required: [true, 'Character is required!'],
            minLength: [5, 'Character must be at least 5 characters long!'],
            validate: [/^[a-zA-Z0-9 ]+$/, 'Character can contain only letters and digits!']
        },
        actor: {
            type: Types.ObjectId,
            ref: 'Cast',
            required: [true, 'Actor is required!'],
        },
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: [true, 'Owner is required!'],
    }
});

const Movie = model('Movie', movieSchema);

export default Movie;