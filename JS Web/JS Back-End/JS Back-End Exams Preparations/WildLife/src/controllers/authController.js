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
    const { firstName, lastName, email, password, rePassword } = req.body;

    try {
        if (password !== rePassword) {
            throw new Error('Passwords does not match!');
        }
        await authService.register(firstName, lastName, email, password);

    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('register', { error: errorMessage, email, firstName, lastName, title: 'Register Page' });
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
        const items = await itemService.getAll().lean(); // find all items created by the user
        items.forEach(item => {
            if (item.author?._id.toString() === userId) {
                userItems.push(item);
            }
        });
        return res.render('profile', { title: 'My Posts', userItems });
    }
    catch (err) {
        return res.redirect('/404');
    }
});

export default router;