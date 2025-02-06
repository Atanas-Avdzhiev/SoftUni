import { Router } from 'express';
import { notAuth, isAuth } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import authService from '../services/authService.js';
//import itemService from '../services/itemService.js';

const router = Router();

router.get('/register', notAuth, (req, res) => {
    res.render('register', { title: 'Register - GlowAlchemy' });
});

router.post('/register', notAuth, async (req, res) => {
    const { name, email, password, rePassword } = req.body;

    try {
        if (password !== rePassword) {
            throw new Error('Passwords does not match!');
        }
        await authService.register(name, email, password);

    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('register', { error: errorMessage, email, name, title: 'Register - GlowAlchemy' });
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
    res.render('login', { title: 'Login - GlowAlchemy' });
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
        return res.render('login', { error: errorMessage, email, title: 'Login - GlowAlchemy' });
    }
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

export default router;