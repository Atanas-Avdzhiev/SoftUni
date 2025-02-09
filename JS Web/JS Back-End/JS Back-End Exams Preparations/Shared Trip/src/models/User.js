import { Schema, model, Types } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    gender: {
        type: String,
        required: [true, 'Gender is required!'],
        enum: {
            values: ['male', 'female'],
            message: ['Invalid gender!']
        }
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        validate:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(bg)$/, 'Email should be in the following format (mailboxname @ domainname)'],
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