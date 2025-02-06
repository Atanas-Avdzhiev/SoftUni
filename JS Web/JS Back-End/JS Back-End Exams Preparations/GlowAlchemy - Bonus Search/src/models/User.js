import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name must be at least 2 characters long!'],
        maxLength: [20, 'Name must be maximum 20 characters long!'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        minLength: [10, 'Email must be at least 10 characters long!'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [4, 'Password must be at least 4 characters long!']
    }
});

// Hash password before save
userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = model('User', userSchema);

export default User;