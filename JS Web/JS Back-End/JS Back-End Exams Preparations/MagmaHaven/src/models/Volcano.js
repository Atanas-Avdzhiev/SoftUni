import { Schema, model, Types } from 'mongoose';

const volcanoSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name must be at least 2 characters long!']
    },
    location: {
        type: String,
        required: [true, 'Location is required!'],
        minLength: [3, 'Location must be at least 3 characters long!']
    },
    elevation: {
        type: Number,
        required: [true, 'Elevation is required!'],
        min: [0, 'Elevation must be minimum 0!'],
    },
    lastEruption: {
        type: Number,
        required: [true, 'Year of Last Eruption  is required!'],
        min: [0, 'Year of Last Eruption  must be between 0 and 2025'],
        max: [2025, 'Year of Last Eruption  must be between 0 and 2025']
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\/.+/, 'Wrong image format!']
    },
    typeVolcano: {
        type: String,
        required: [true, 'Type is required!'],
        enum: {
            values: [
                "Supervolcanoes",
                "Submarine",
                "Subglacial",
                "Mud",
                "Stratovolcanoes",
                "Shield"
            ],
            message: 'Type must be one of: Supervolcanoes, Submarine, Subglacial, Mud, Stratovolcanoes, Shield',
        }
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description must be at least 10 characters long!']
    },
    voteList: [{
        _id: false,
        users: [{
            type: Types.ObjectId,
            ref: 'User',
            required: [true, 'User is required!'],
        }],
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: [true, 'Owner is required!'],
    }
});

const Volcano = model('Volcano', volcanoSchema);

export default Volcano;