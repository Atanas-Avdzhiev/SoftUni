import { Router } from 'express';
import { notAuth, isAuth } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import authService from '../services/authService.js';
import deviceService from '../services/deviceService.js';

const router = Router();

router.get('/register', notAuth, (req, res) => {
    res.render('register', { title: 'TechStore - Register' });
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
        return res.render('register', { error: errorMessage, email, name, title: 'TechStore - Register' });
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
    res.render('login', { title: 'TechStore - Login' });
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
        return res.render('login', { error: errorMessage, email, title: 'TechStore - Login' });
    }
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

router.get('/profile', isAuth, async (req, res) => {
    const userId = req.user?._id;
    const userDevices = [];
    try {
        const devices = await deviceService.getAll().lean(); // find all items created by the user
        devices.forEach(device => {
            if (device.owner.toString() === userId) {
                userDevices.push(device);
            }
        });

        const userPreferredDevices = await deviceService.getAllVotedItemsByUser(userId).lean(); // find all items voted/preferred by the user
        return res.render('profile', { title: 'TechStore - Profile', userDevices, userPreferredDevices });
    }
    catch (err) {
        console.log(err)
        return res.redirect('/404');
    }
});

export default router;