import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required!'],
        minLength: [3, 'First Name must be at least 3 characters long!'],
        validate: [/^[a-zA-Z]+$/, 'First Name should contain only english letters!']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required!'],
        minLength: [5, 'Last Name must be at least 5 characters long!'],
        validate: [/^[a-zA-Z]+$/, 'Last Name should contain only english letters!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        validate:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(bg)$/, 'Email should be in the following format: <name>@<domain>.<extension>'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [4, 'Password must be at least 4 characters long!']
    }
});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = model('User', userSchema);

export default User;