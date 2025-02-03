import { Schema, model, Types } from 'mongoose';

const schema = new Schema({
    brand: {
        type: String,
        required: [true, 'Brand is required!'],
        minLength: [2, 'Brand must be at least 2 characters long!']
    },
    model: {
        type: String,
        required: [true, 'Model is required!'],
        minLength: [5, 'Model must be at least 5 characters long!']
    },
    hardDisk: {
        type: String,
        required: [true, 'Hard disk is required!'],
        minLength: [5, 'Hard disk must be at least 5 characters long!']
    },
    screenSize: {
        type: String,
        required: [true, 'Screen size  is required!'],
        minLength: [1, 'Screen size must be at least 1 characters long!']
    },
    ram: {
        type: String,
        required: [true, 'RAM is required!'],
        minLength: [2, 'RAM must be at least 2 characters long!']
    },
    operatingSystem: {
        type: String,
        required: [true, 'Operating System is required!'],
        minLength: [5, 'Operating System must be at least 5 characters long!'],
        maxLength: [20, 'Operating System must be maximum 20 characters long!']
    },
    cpu: {
        type: String,
        required: [true, 'CPU is required!'],
        minLength: [10, 'CPU must be at least 10 characters long!'],
        maxLength: [50, 'CPU must be maximum 50 characters long!']
    },
    gpu: {
        type: String,
        required: [true, 'GPU is required!'],
        minLength: [10, 'GPU must be at least 10 characters long!'],
        maxLength: [50, 'GPU must be maximum 50 characters long!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [1, 'Price must be at least 1!']
    },
    color: {
        type: String,
        required: [true, 'Color is required!'],
        minLength: [2, 'Color must be at least 2 characters long!'],
        maxLength: [10, 'Color must be maximum 10 characters long!']
    },
    weight: {
        type: String,
        required: [true, 'Weight is required!'],
        minLength: [1, 'Weight must be at least 1 characters long!'],
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\/.+/, 'Wrong image format!']
    },
    preferredList: [{
        type: Types.ObjectId,
        ref: 'User'

    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Device = model('Device', schema);

export default Device;