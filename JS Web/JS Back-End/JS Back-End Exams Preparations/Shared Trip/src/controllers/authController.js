import { Router } from 'express';
import { notAuth, isAuth } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import authService from '../services/authService.js';
import itemService from '../services/itemService.js';

const router = Router();

router.get('/register', notAuth, (req, res) => {
    res.render('register', { title: 'Register Page' });
});

router.post('/register', notAuth, async (req, res) => {
    const { email, password, rePassword, gender } = req.body;

    try {
        if (password !== rePassword) {
            throw new Error('Passwords does not match!');
        }
        await authService.register(email, password, gender);

    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('register', { error: errorMessage, email, gender, title: 'Register Page' });
    }

    try {
        const token = await authService.login(email, password);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    }
    catch (err) {
        return res.redirect('/login');
    }
});

router.get('/login', notAuth, (req, res) => {
    res.render('login', { title: 'Login Page' });
});

router.post('/login', notAuth, async (req, res) => {
    const { email, password } = req.body;

    try {

        if (email === '' || password === '') {
            throw new Error('Invalid email or password!');
        }

        const token = await authService.login(email, password);
        res.cookie('auth', token, { httpOnly: true });
        return res.redirect('/');

    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('login', { error: errorMessage, email, title: 'Login Page' });
    }
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

router.get('/profile', isAuth, async (req, res) => {
    const userId = req.user?._id;
    const userItems = [];
    try {
        const items = await itemService.getAll().lean();
        items.forEach(item => {
            if (item.creator.toString() === userId) {
                userItems.push(item);
            }
        });

        const isMale = req.user?.gender === 'male' ? true : false;

        return res.render('profile', { title: 'Profile Page', userItems, isMale });
    }
    catch (err) {
        return res.redirect('/404');
    }
});

export default router;