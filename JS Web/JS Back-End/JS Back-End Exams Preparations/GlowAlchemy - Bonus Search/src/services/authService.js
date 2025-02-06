import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import 'dotenv/config';

const register = async (name, email, password) => {
    const emailCount = await User.countDocuments({ email });

    if (emailCount > 0) {
        throw new Error('Email already exists!');
    }

    const usernameCount = await User.countDocuments({ name });

    if (usernameCount > 0) {
        throw new Error('Name already exists!');
    }

    return User.create({ name, email, password });
}

const login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('User does not exist!');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Password does not match!');
    }

    const JWT_SECRET = process.env.JWT_SECRET;

    const payload = {
        _id: user._id,
        username: user.name,
        email: user.email
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });
    return token;
}

export default {
    login,
    register
}