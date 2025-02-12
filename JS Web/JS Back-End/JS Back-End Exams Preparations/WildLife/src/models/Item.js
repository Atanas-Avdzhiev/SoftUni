import { Schema, model, Types } from 'mongoose';

const postSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [6, 'Title must be at least 6 characters long!']
    },
    keyword: {
        type: String,
        required: [true, 'Keyword is required!'],
        minLength: [6, 'Keyword must be at least 6 characters long!']
    },
    location: {
        type: String,
        required: [true, 'Location is required!'],
        maxLength: [15, 'Location must be maximum 15 characters long!']
    },
    dateOfCreation: {
        type: String,
        required: [true, 'Date of Creation is required!'],
        minLength: [10, 'Date of Creation must be exactly 10 characters long!'],
        maxLength: [10, 'Date of Creation must be exactly 10 characters long!']
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\//, 'Image should start with http:// or https://']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [8, 'Description must be at least 8 characters long!']
    },
    votesOnPost: [{
        type: Types.ObjectId,
        ref: 'User'

    }],
    author: {
        type: Types.ObjectId,
        ref: 'User'
    },
    ratingOfPost: {
        type: Number,
        default: 0
    }
});

const Post = model('Post', postSchema);

export default Post;