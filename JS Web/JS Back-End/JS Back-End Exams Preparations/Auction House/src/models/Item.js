import { Schema, model, Types } from 'mongoose';

const auctionSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [4, 'Title must be at least 4 characters long!']
    },
    description: {
        type: String,
        maxLength: [200, 'Description must be maximum 200 characters long!']
    },
    category: {
        type: String,
        required: [true, 'Category is required!'],
        enum: {
            values: ["Vehicles", "Real Estate", "Electronics", "Furniture", "Other"],
            message: "Category must be one of: Vehicles, Real Estate, Electronics, Furniture, Other."
        }
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [0, 'Price cannot be negative!']
    },
    image: {
        type: String,
        validate: [/^https?:\/\//, 'Image should start with http:// or https://']
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    bidder: {
        type: Types.ObjectId,
        ref: 'User'
    },
    closed: {
        type: Boolean,
        default: false
    }
});

auctionSchema.pre("validate", function (next) {
    if (this.isModified() && this.closed) {
        return next(new Error("This auction is closed and cannot be modified."));
    }
    next();
});

const Item = model('Auction', auctionSchema);

export default Item;