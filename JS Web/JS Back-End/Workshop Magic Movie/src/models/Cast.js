import { Schema, model, Types } from 'mongoose';

const castSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [5, 'Name must be at least 5 characters long!'],
        validate: [/^[a-zA-Z0-9 ]+$/, 'Name can contain only letters and digits!']
    },
    born: {
        type: String,
        required: [true, 'Born is required!'],
        minLength: [10, 'Born must be at least 10 characters long!'],
        validate: [/^[a-zA-Z0-9 ]+$/, 'Born can contain only letters and digits!']
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
        min: [1, 'Age must be between 1 and 120!'],
        max: [120, 'Age must be between 1 and 120!']
    },
    imageURL: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\/.+/, 'Wrong image format!']
    }
});

const Cast = model('Cast', castSchema);

export default Cast;