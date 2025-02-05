import { Router } from 'express';
import itemService from '../services/itemService.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const getLast3 = await itemService.getLast3().lean();
        return res.render('home', { title: 'Cosmic Explorer', last3: getLast3 });
    } catch (err) {
        return res.render('home', { title: 'Cosmic Explorer' });
    }
});

// router.get('/about', (req, res) => {
//     res.render('about', { title: 'About' });
// });

router.get('/catalog', async (req, res) => {
    let items = [];

    try {
        items = await itemService.getAll().lean(); // lean is needed to convert it to array of objects so the handlebar can recognize it, lean must be used after it is awaited!
    } catch (err) {
        return res.redirect('/404');
    }

    return res.render('catalog', { items, title: 'Planet Catalog' });
});

export default router;