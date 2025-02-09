import { Schema, model, Types } from 'mongoose';

const tripSchema = new Schema({
    startPoint: {
        type: String,
        required: [true, 'Start Point is required!'],
        minLength: [4, 'Start Point must be at least 4 characters long!']
    },
    endPoint: {
        type: String,
        required: [true, 'End Point is required!'],
        minLength: [4, 'End Point must be at least 4 characters long!']
    },
    date: {
        type: String,
        required: [true, 'Date is required!']
    },
    time: {
        type: String,
        required: [true, 'Time is required!']
    },
    carImage: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\//, 'Image should start with http:// or https://']
    },
    carBrand: {
        type: String,
        required: [true, 'Car Brand is required!'],
        minLength: [4, 'Car Brand must be at least 4 characters long!']
    },
    seats: {
        type: Number,
        required: [true, 'Seats is required!'],
        min: [0, 'Seats should be between 0 and 4!'],
        max: [4, 'Seats should be between 0 and 4!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [1, 'Price should be between 1 and 50!'],
        max: [50, 'Price should be between 1 and 50!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description should be at least 10 characters long!']
    },
    buddies: [{
        type: Types.ObjectId,
        ref: 'User'

    }],
    creator: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Trip = model('Trip', tripSchema);

export default Trip;