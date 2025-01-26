import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: true,
        validate: [/@[a-zA-Z0-9]+.[a-zA-Z0-9]+$/, 'Invalid email format!'],
        minLength: [10, 'Email must be at least 10 characters long!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        validate: [/^[a-zA-Z0-9]+$/, 'Password must contain only letters and numbers!'],
        minLength: [6, 'Password must be at least 6 characters long!']
    }
});

// Hash password before save
userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = model('User', userSchema);

export default User;