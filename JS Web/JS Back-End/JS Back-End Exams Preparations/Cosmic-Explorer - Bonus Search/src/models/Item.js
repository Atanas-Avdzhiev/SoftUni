import { Schema, model, Types } from 'mongoose';

const planetSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name must be at least 2 characters long!']
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
        min: [1, 'Age must be minimum 1!']
    },
    solarSystem: {
        type: String,
        required: [true, 'Solar System is required!'],
        minLength: [2, 'Solar System must be at least 2 characters long!']
    },
    type: {
        type: String,
        required: [true, 'Type  is required!'],
        enum: {
            values: [
                "Inner",
                "Outer",
                "Dwarf"
            ],
            message: 'Type must be one of: Inner, Outer, Dwarf'
        }
    },
    moons: {
        type: Number,
        required: [true, 'Moons is required!'],
        min: [1, 'Moons must be minimum 1!']
    },
    size: {
        type: Number,
        required: [true, 'Size is required!'],
        min: [1, 'Size must be minimum 1!']
    },
    rings: {
        type: String,
        required: [true, 'Rings  is required!'],
        enum: {
            values: [
                "Yes",
                "No"
            ],
            message: 'Rings must be one of: Yes, No'
        }
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description must be at least 10 characters long!'],
        maxLength: [100, 'Description must be maximum 100 characters long!']
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\//, 'Image should start with http:// or https://']
    },
    likedList: [{
        type: Types.ObjectId,
        ref: 'User'

    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Planet = model('Planet', planetSchema);

export default Planet;