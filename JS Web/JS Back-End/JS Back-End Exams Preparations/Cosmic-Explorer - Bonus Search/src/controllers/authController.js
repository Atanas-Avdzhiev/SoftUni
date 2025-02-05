import { Router } from 'express';
import { notAuth, isAuth } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import authService from '../services/authService.js';
//import itemService from '../services/itemService.js';

const router = Router();

router.get('/register', notAuth, (req, res) => {
    res.render('register', { title: 'Register' });
});

router.post('/register', notAuth, async (req, res) => {
    const { username, email, password, rePassword } = req.body;

    try {
        if (password !== rePassword) {
            throw new Error('Passwords does not match!');
        }
        await authService.register(username, email, password);

    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('register', { error: errorMessage, email, username, title: 'Register' });
    }

    try {
        const token = await authService.login(username, password);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    }
    catch (err) {
        return res.redirect('/login');
    }
});

router.get('/login', notAuth, (req, res) => {
    res.render('login', { title: 'Login' });
});

router.post('/login', notAuth, async (req, res) => {
    const { username, password } = req.body;

    try {

        if (username === '' || password === '') {
            throw new Error('Invalid email or password!');
        }

        const token = await authService.login(username, password);
        res.cookie('auth', token, { httpOnly: true });
        return res.redirect('/');

    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('login', { error: errorMessage, username, title: 'Login' });
    }
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

// router.get('/profile', isAuth, async (req, res) => {
//     const userId = req.user?._id;
//     const userItems = [];
//     try {
//         const items = await itemService.getAll().lean(); // find all items created by the user
//         items.forEach(item => {
//             if (item.owner.toString() === userId) {
//                 userItems.push(item);
//             }
//         });

//         const userVotedItems = await itemService.getAllVotedItemsByUser(userId).lean(); // find all items voted/preferred by the user
//         return res.render('profile', { title: 'Profile', userItems, userVotedItems });
//     }
//     catch (err) {
//         return res.redirect('/404');
//     }
// });

export default router;