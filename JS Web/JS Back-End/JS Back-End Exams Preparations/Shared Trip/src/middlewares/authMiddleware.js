import 'dotenv/config';
import jwt from 'jsonwebtoken';

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }

    try {
        const JWT_SECRET = process.env.JWT_SECRET;
        const decodedToken = jwt.verify(token, JWT_SECRET);

        const user = {
            _id: decodedToken._id,
            email: decodedToken.email,
            gender: decodedToken.gender
        };

        req.user = user;
        req.isAuthenticated = true;
        res.locals.userId = user._id;
        res.locals.userEmail = user.email;
        res.locals.isAuthenticated = true;

        return next();
    } catch (err) {
        res.clearCookie('auth');
        res.redirect('/login');
    }
};

export const isAuth = (req, res, next) => {
    if (!req.isAuthenticated) {
        return res.redirect('/login');
    }

    return next();
};

export const notAuth = (req, res, next) => {
    if (req.isAuthenticated) {
        return res.redirect('/404');
    }

    return next();
};