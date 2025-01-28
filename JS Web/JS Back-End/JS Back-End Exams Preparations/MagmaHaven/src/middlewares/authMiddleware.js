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
        };

        const url = req.url.split('/');

        // if (url[3] === 'edit' || url[3] === 'delete' || url[3] === 'addCast') {
        //     const movieId = url[2];
        //     const movie = await movieService.getOne(movieId);

        //     if (movie.owner.toString() !== user?._id) {
        //         throw new Error('User is not the owner of this movie!');
        //     }
        // }

        req.user = user;
        req.isAuthenticated = true;
        res.locals.userId = user._id;
        res.locals.userEmail = user.email;
        res.locals.isAuthenticated = true; // main nav layout gets info from locals

        return next();
    } catch (err) {
        console.log(err);
        if (err.message === 'User is not the owner of this volcano!') {
            return res.redirect('/');
        }
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
        return res.redirect('/');
    }

    return next();
};