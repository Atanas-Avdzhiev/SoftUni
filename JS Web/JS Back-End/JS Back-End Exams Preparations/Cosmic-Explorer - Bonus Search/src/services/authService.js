import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import 'dotenv/config';

const register = async (username, email, password) => {
    const emailCount = await User.countDocuments({ email });

    if (emailCount > 0) {
        throw new Error('Email already exists!');
    }

    const usernameCount = await User.countDocuments({ username });

    if (usernameCount > 0) {
        throw new Error('Username already exists!');
    }

    return User.create({ username, email, password });
}

const login = async (username, password) => {
    const user = await User.findOne({ username });

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
        username: user.username,
        email: user.email
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });
    return token;
}

export default {
    login,
    register
}