import { Router } from 'express';
import itemService from '../services/itemService.js';

const router = Router();

router.get('/', async (req, res) => {
    return res.render('home', { title: 'Home Page' });

});

router.get('/catalog', async (req, res) => {
    let items = [];

    try {
        items = await itemService.getAll().lean();
    } catch (err) {
        return res.redirect('/404');
    }

    return res.render('catalog', { items, title: 'Shared Trips' });
});

export default router;