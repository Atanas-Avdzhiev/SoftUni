import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required!'],
        minLength: [1, 'First Name must be at least 1 characters long!']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required!'],
        minLength: [1, 'Last Name must be at least 1 characters long!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        validate: [/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/, 'Invalid email format'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [5, 'Password must be at least 5 characters long!']
    }
});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = model('User', userSchema);

export default User;