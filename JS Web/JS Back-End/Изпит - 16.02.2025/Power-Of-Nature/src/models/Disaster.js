import { Schema, model, Types } from 'mongoose';

const disasterSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name must be at least 2 characters long!']
    },
    type: {
        type: String,
        required: [true, 'Type is required!'],
        enum: {
            values: ["Wildfire", "Flood", "Earthquake", "Hurricane", "Drought", "Tsunami", "Other"]
        }
    },
    year: {
        type: Number,
        required: [true, 'Year is required!'],
        min: [0, 'Year must be minimum 0!'],
        max: [2024, 'Year must be maximum 2024!']
    },
    location: {
        type: String,
        required: [true, 'Location is required!'],
        minLength: [3, 'Location must be at least 3 characters long!']
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\//, 'Image should start with http:// or https://']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description must be at least 10 characters long!']
    },
    interestedList: [{
        type: Types.ObjectId,
        ref: 'User'

    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Disaster = model('Disaster', disasterSchema);

export default Disaster;